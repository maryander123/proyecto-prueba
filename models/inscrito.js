const mongoose = require('mongoose');

const inscritoSchema = new mongoose.Schema({
    nombre: String,
    email: String,
    telefono: Number,
    edad: Number,
    verified: {
        type: Boolean,
        default: false
    },
    categorias: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categoria'
    }]
});

inscritoSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});


const Inscrito = mongoose.model('Inscrito', inscritoSchema);

module.exports = Inscrito;