const express = require('express');
const estateController = require('./../controller/estateController');
const authController = require('./../controller/authController');

const router = express.Router();

router
    .route('/')
    .get(authController.protect, estateController.getAllEstate)
    .post(estateController.createEstate);

router
    .route('/:id')
    .get(estateController.getEstate)
    .patch(
        authController.protect,
        authController.restrictTo('user'),
        estateController.updateEstate
    )
    .delete(
        authController.protect,
        authController.restrictTo('user'),
        estateController.deleteEstate
    );

module.exports = router;
