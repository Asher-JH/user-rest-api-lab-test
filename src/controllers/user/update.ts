import { NextFunction, Request, Response } from 'express';

import { BadRequestError } from '@src/errors';
import { db } from '@src/db';

export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    if (!id) throw new BadRequestError('Missing user id');

    const user = await db.user.findUnique({
      where: {
        id,
      },
    });

    if (!user) throw new Error('User not found');

    await db.user.update({ where: { id }, data: { ...req.body } });

    return res.status(202).json('User updated');
  } catch (error) {
    next(error);
  }
};
