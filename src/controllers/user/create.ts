import { NextFunction, Request, Response } from 'express';

import { db } from '@src/db';

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, social, gender, dob, age } = req.body;

    await db.user.create({
      data: {
        name: name || '',
        email: email || '',
        social: social || '',
        gender: gender || '',
        dob: dob || '',
        age: age || 0,
      },
    });

    return res.status(200).json('User registered successfully');
  } catch (error) {
    console.log(error);
    next(error);
  }
};
