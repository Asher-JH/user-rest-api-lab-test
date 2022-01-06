import { NextFunction, Request, Response } from 'express';

import { CustomError } from '@src/errors/custom-error';

// ** Next has to be an argument even if not used to ensure errors handled properly
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof CustomError) {
    res.status(err.statusCode).send({ errors: err.serializeErrors() });
    return;
  }

  res.status(400).send({
    errors: [{ message: 'Something went wrong' }],
  });
};
