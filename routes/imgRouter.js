const express = require('express');
const router = express.Router();
const imageController = require('../controllers/imgController');

router.post('/upload', imageController.uploadImage);

router.get('/random', imageController.getRandomImage);

router.post('/comment', imageController.addComment);

router.post('/emotion', imageController.addEmotion);

module.exports = router;
