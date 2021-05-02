import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import AppError from '../error/AppError';
import  dotenv from 'dotenv';


const app = express();

app.use(express.json());
// app.use(error());
dotenv.config();

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  }

  console.log(error);

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(3333, () => {
  console.log('Server started on port 3333');
});
