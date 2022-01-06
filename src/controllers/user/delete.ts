import { NextFunction, Request, Response } from 'express';

import { BadRequestError } from '@src/errors';
import { db } from '@src/db';

export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    if (!id) throw new BadRequestError('Missing user id');

    const user = await db.user.findUnique({
      where: {
        id,
      },
    });

    if (!user) throw new Error('User not found');

    await db.user.delete({ where: { id } });
    return res.status(200).json('User deleted');
  } catch (error) {
    next(error);
  }
};
