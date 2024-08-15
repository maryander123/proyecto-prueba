const categoriasRouter = require('express').Router();
const User = require('../models/user');
const categoria = require('../models/categoria');

//mostrar usuario
categoriasRouter.get('/', async (request, response) => {
    const user = request.user;
    const categorias = await categoria.find({ user: user.id });
    return response.status(200).json(categorias);
});

//crear usuarios
categoriasRouter.post('/', async (request, response) => {
    const user = request.user;
    const { text, price } = request.body;
    const newCategoria = new categoria({
        text,
        price,
        user: user._id
    })
    const savedCategoria = await newCategoria.save();
    user.categorias = user.categorias.concat(savedCategoria._id);
    await user.save();
    
    
    return response.status(201).json(savedCategoria);
});
// editar

categoriasRouter.put('/:id', async (request, response) => {
    const user = request.user;
    // lo que obtengo del fron
    const { text, price } = request.body;
    
    await categoria.findByIdAndUpdate(request.params.id, { text, price, user: user._id });
    // lo que devuelvo
    return response.status(200).json('Categoría actualizada');
});

//eliminar categoria
categoriasRouter.delete('/:id', async (request, response) => {
    const user = request.user;
    console.log(user)
    await categoria.findByIdAndDelete(request.params.id);

    user.categorias = user.categorias.filter(categoria => categoria.id !== request.params.id);
    console.log('se elimino una categoria',categoria)
    await user.save();

    
    return response.status(204);
});

   


module.exports = categoriasRouter;