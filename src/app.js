//Aqui se configura express y el backend

import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

import {createRoles} from './libs/initialSetup.js'

import authRoutes from './routes/auth.routes.js'
import productsRoutes from './routes/products.routes.js'
import documentsRoutes from './routes/documents.routes.js'
import userRoutes from './routes/user.routes.js'


const app = express();
createRoles(); 

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser())

app.get('/', (req, res) =>{
    res.json('hola mundo')
})

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/products', productsRoutes);
app.use('/api/documents', documentsRoutes)


export default app;

