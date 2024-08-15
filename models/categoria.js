const mongoose = require('mongoose');

const categoriaSchema = new mongoose.Schema({
    text: String,
    price: Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

categoriaSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});

const categoria = mongoose.model('categoria', categoriaSchema);

module.exports = categoria;