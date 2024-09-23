import express from 'express';
import { createProduct, getProducts } from '../Controller/ProductsController.js';


const router = express.Router();

router.post('/', createProduct);
router.get('/', getProducts);

// Add more routes for update and delete

export default router;
