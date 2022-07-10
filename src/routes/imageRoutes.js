const express = require('express');
const imageController = require('./../controller/imageController');
const authController = require('./../controller/authController');

const router = express.Router();

router
    .route('/')
    .get(imageController.getAllImage)
    .post(imageController.createImage);

router
    .route('/:id')
    .get(imageController.getImage)
    .patch(
        authController.protect,
        authController.restrictTo('user'),
        imageController.updateImage
    )
    .delete(
        authController.protect,
        authController.restrictTo('user'),
        imageController.deleteImage
    );

module.exports = router;
