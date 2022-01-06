import { NextFunction, Request, Response } from 'express';

import { BadRequestError, NotFoundError } from '@src/errors';
import { db } from '@src/db';

export const viewAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await db.user.findMany({});
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

export const viewSingleUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    if (!id) throw new BadRequestError('Missing user id');

    const user = await db.user.findUnique({
      where: {
        id,
      },
    });

    if (!user) throw new NotFoundError();

    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
