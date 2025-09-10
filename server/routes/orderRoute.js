import express from "express";
import adminAuth from "../middleware/adminAuth.js";
import authUser from "../middleware/auth.js";
import { updateStatus,placeOrder,placeOrderStripe,allOrders,userOrders,verifyStripe } from "../controllers/orderController.js";

const orderRouter=express.Router();

//Admin routes
orderRouter.post('/list',adminAuth,allOrders);
orderRouter.post('/update',adminAuth,updateStatus);

//User routes
orderRouter.post('/orders',authUser,userOrders);

//payment routes
orderRouter.post('/cod',authUser,placeOrder);
orderRouter.post('/stripe',authUser,placeOrderStripe);

//verify payement
orderRouter.post('/verifyStripe',authUser,verifyStripe)

export default orderRouter;