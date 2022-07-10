const Images = require('../models/imagesModel');
const catchAsync = require('../utils/catchAsync');

exports.getAllImage = catchAsync(async (req, res) => {
    const images = await Images.find(req.query).select('-__v');

    res.status(200).json({
        status: 'success',
        result: images.length,
        requestAt: req.requestTime,
        data: {
            images,
        },
    });
});

exports.updateImage = catchAsync(async (req, res) => {
    const images = await Images.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });

    res.status(200).json({
        status: 'success',
        data: {
            images,
        },
    });
});

exports.deleteImage = catchAsync(async (req, res) => {
    await Images.findByIdAndDelete(req.params.id);
    res.status(204).json({
        status: 'success',
        data: null,
    });
});

exports.getImage = catchAsync(async (req, res) => {
    const images = await Images.findById(req.params.id);
    //images.findOne({_id: req.parmas.id})

    res.status(200).json({
        status: 'success',
        data: {
            images,
        },
    });
});

exports.createImage = catchAsync(async (req, res, next) => {
    const images = await Images.create(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            images,
        },
    });
});
