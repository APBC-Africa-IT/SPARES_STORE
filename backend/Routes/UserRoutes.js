import express from 'express';
import { registerUser, loginUser, getAllUsers, getUserById } from '../Controller/UserController.js';

const router = express.Router();

// Registration Route
router.post("/register", registerUser);

//Login User
router.post("/login", loginUser);

//getAllUsers
router.get("/", getAllUsers);

// Get user by ID route
router.get("/:id", getUserById);

export default router;