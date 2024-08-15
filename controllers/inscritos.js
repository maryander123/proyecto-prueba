const inscritosRouter = require('express').Router();
const inscrito = require('../models/inscrito');
const jwt = require('jsonwebtoken');

inscritosRouter.post('/', async (request, response) => {
    const { nombre, email, telefono, edad, categorias } = request.body
   
    const newInscrito = new inscrito({
        nombre,
        email,
        telefono,
        edad,
        categorias,
    });

  const savedInscrito =  await newInscrito.save(); 
  console.log(savedInscrito);
  
});



module.exports = inscritosRouter;
