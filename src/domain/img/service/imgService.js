const Img = require('../entity/img');
const Comment = require('../entity/comment');
const Emotion = require('../entity/emotion');

function getKSTDateString() {
    const now = new Date();
    now.setHours(now.getHours() + 9)

    const year = now.getFullYear;
    const month = String(now.getMonth() + 1);
    const day = String(now.getDate());

    return `${year}.${month}.${day}`;
}

async function uploadImage(imgData) {
    const newImage = new Img();
    newImage.img_data = imgData.data;
    newImage.img_name = imgData.name;
    newImage.img_reference = imgData.reference;
    newImage.img_date = getKSTDateString();  
    
    await newImage.save();
    return newImage;
}

async function getRandomImage() {
    const image = await Img.find();

    if (randomImage) {
        randomImage.img_view += 1;

        const emotions = await Emotion.findOne({ where: { img_id: randomImage.img_id } });
        const comments = await Comment.find({ where: { img: randomImage.img_id } });

        return {
            image: {
                ...randomImage,
                img_data: randomImage.img_data.toString('base64'),  
            },
            emotions, 
            comments 
        };
    }

    return null;
}