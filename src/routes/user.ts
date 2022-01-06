import express from 'express';

import { viewAllUsers, viewSingleUser, deleteUser, createUser, updateUser } from '@src/controllers/user';

const router = express.Router();

// CRUD
router.post('/api/user', createUser);
router.put('/api/user/:id', updateUser);
router.get('/api/user/:id', viewSingleUser);
router.get('/api/users', viewAllUsers);
router.delete('/api/user/:id', deleteUser);

export { router as userRouter };
