const mongoose = require('mongoose');

const imagesSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
    },
    type: String,
    source: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// facultySchema.pre('save', async function (next) {
//     const estatesPromies = this.estates.map(
//         async (id) => await Estate.findById(id)
//     );
//     this.estates = await Promise.all(estatesPromies);
//     next();
// });

const Images = mongoose.model('Images', imagesSchema);

module.exports = Images;
