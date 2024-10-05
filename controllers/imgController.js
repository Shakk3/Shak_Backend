const Img = require('../models/img');
const ImgEmotion = require('../models/emotion');
const ImgComment = require('../models/comment');

exports.uploadImage = async (req, res) => {
  try {
    const { img_data, img_name, img_reference } = req.body;

    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}.${(currentDate.getMonth() + 1).toString()}.${currentDate.getDate().toString()}`;

    const newImage = await Img.create({
      img_data,  
      img_name,
      img_reference,
      img_date: formattedDate,
      img_view: 0
    });

    await ImgEmotion.create({
      img_id: newImage.img_id,
      emotion_angry: 0,
      emotion_new: 0,
      emotion_love: 0,
      emotion_crazy: 0
    });

    res.status(200).json({ message: 'Image uploaded successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error uploading image', error });
  }
};

exports.getRandomImage = async (req, res) => {
  try {
    const images = await Img.findAll();
    const randomImage = images[Math.floor(Math.random() * images.length)];

    randomImage.img_view += 1;
    await randomImage.save();
    
    const emotions = await ImgEmotion.findOne({ where: { img_id: randomImage.img_id } });
    const comments = await ImgComment.findAll({ where: { img_id: randomImage.img_id } });

    res.status(200).json({ image: randomImage, emotions, comments });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching image', error });
  }
};

exports.addComment = async (req, res) => {
  try {
    const { img_id, comment_name, comment_content } = req.body;

    await ImgComment.create({
      img_id,
      comment_name,
      comment_content
    });

    res.status(200).json({ message: 'Comment added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error adding comment', error });
  }
};

exports.addEmotion = async (req, res) => {
  try {
    const { img_id, emotion_type } = req.body;
    const emotionField = `emotion_${emotion_type}`;

    const emotion = await ImgEmotion.findOne({ where: { img_id } });
    if (emotion) {
      emotion[emotionField] += 1;
      await emotion.save();
      res.status(200).json({ message: 'Emotion updated successfully' });
    } else {
      res.status(404).json({ message: 'Image or emotion not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating emotion', error });
  }
};
