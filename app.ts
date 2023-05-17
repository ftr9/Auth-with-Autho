import * as path from 'node:path';
import express from 'express';
import { auth, requiresAuth } from 'express-openid-connect';
import { config } from './config/Auth.config';
import PageRouter from './router/pages.route';
import ProductRouter from './router/product.route';
import GlobalErrorHandler from './utils/ErrorHandler';
import dotenv from 'dotenv';
import * as Path from 'node:path';
dotenv.config({
  path: Path.join(__dirname, 'config/config.env'),
});

const app = express();

//frontend
app.use(express.static(path.join(__dirname, 'static')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//auth middleware
app.use(auth(config));

//routes
app.use('/products', ProductRouter);
app.use(PageRouter);

app.use(GlobalErrorHandler);

export default app;
