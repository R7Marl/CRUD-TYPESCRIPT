import express from 'express';
import morgan from 'morgan';
import "reflect-metadata";
import cors from 'cors';
import indexRoute from './routes/indexRouter';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(indexRoute);
export default app;