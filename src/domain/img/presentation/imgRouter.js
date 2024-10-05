const express = require('express');
const imgService = require('../service/imgService');
const router = express.Router;

router.post('/upload', async (req, res) => {
    try {
        const {img_data, img_name, img_reference} = req.body;

        const imgBuffer = Buffer.from(img_data, 'base64');

        const result = await imgService.uploadImage({
            data: imgBuffer,
            name: img_name,
            reference: img_reference,
        });

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/random', async (req, res) => {
    try {
        const result = await imgService.getRandomImage();
        if (result) {
            res.json(result);
        } else {
            res.status(404).json({ message: 'Image Not Found Error' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/:img_id/emotion', async (req, res) => {
    try {
        const { img_id } = req.params;
        const { emotion_type } = req.body;  

        const result = await imgService.addEmotion(img_id, emotion_type);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/:img_id/comment', async (req, res) => {
    try {
        const { img_id } = req.params;
        const { comment_name, comment_content } = req.body;  

        const result = await imgService.addComment(img_id, comment_name, comment_content);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;