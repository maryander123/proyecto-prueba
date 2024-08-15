require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const cookieParse = require('cookie-parser');
const morgan = require('morgan');
const usersRouter = require('./controllers/users');
const loginRouter = require('./controllers/login');
const categoriasRouter = require('./controllers/categorias');
const { userExtractor } = require('./middleware/auth');
const inscritosRouter = require('./controllers/inscritos');
const logoutRouter = require('./controllers/logout');
const { MONGO_URI } = require('./config');


(async() => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('Conectado a mongo');
        
    } catch (error) {
        console.log(error);
 
    }
})();

app.use(cors());
app.use(express.json());
app.use(cookieParse());

//Rutas frontend
app.use('/', express.static(path.resolve('views', 'home')));
app.use('/signup', express.static(path.resolve('views', 'signup')));
app.use('/login', express.static(path.resolve('views', 'login')));
app.use('/components', express.static(path.resolve('views', 'components')));
app.use('/images', express.static(path.resolve('img')));
app.use('/verify/:id/:token', express.static(path.resolve('views', 'verify')));
app.use('/bailes', express.static(path.resolve('views', 'bailes')));
app.use('/competencias', express.static(path.resolve('views', 'competencias')));
app.use('/categorias', express.static(path.resolve('views', 'categorias')));
app.use('/admincategorias', express.static(path.resolve('views', 'admincategorias')));
app.use('/inscripcion', express.static(path.resolve('views', 'inscripcion')));

app.use(morgan('tiny'));

//Rutas backend
app.use('/api/users', usersRouter);
app.use('/api/login', loginRouter);
app.use('/api/logout', logoutRouter);
app.use('/api/admincategorias', userExtractor ,categoriasRouter);
app.use('/api/inscritos', inscritosRouter);




module.exports = app;