import express from 'express';
import {addOrderItems, getOrderById, updateOrderToPaid, updateOrderToDelivered, getMyOrders,} from '../Controllers/OrderController.js';
import authMiddleware from '../Middlewares/AuthMiddleware.js';

const router = express.Router();

router.route('/').post(authMiddleware, addOrderItems);
router.route('/myorders').get(authMiddleware, getMyOrders);
router.route('/:id').get(authMiddleware, getOrderById);
router.route('/:id/pay').put(authMiddleware, updateOrderToPaid);
router.route('/:id/deliver').put(authMiddleware, updateOrderToDelivered);

export default router;
