import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { json } from 'body-parser';
import dotenv from 'dotenv-safe';

import { NotFoundError } from '@src/errors';
import { errorHandler } from '@src/middleware';
import { userRouter } from '@src/routes';

dotenv.config();

// Express app configs & dev setup
const app: Application = express();
app.set('trust proxy', true);
app.use(cors());
app.use(json());
app.use(morgan('dev'));

// Routes
app.use(userRouter);

// Error handlers
app.all('*', () => {
  throw new NotFoundError();
});
app.use(errorHandler);

export { app };
