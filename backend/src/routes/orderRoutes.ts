import express from 'express'
import { getOrders,getOrderById,createNewOrder} from '../service/orderService'
import  checkRoles  from '../middleware/validateRole';
import  verifyToken  from '../middleware/verifytoken';
const router=express.Router()
router.get("/orders", verifyToken, checkRoles(["order-reader"]) ,async (req,res) =>{
    const ord=await getOrders()
    res.json(ord)
})
router.get("/orders/:id",verifyToken, checkRoles(["order-reader"]), async (req,res) =>{
    const order_id=req.params.id
    const byId1=await getOrderById(order_id)
    res.send(byId1)
})
router.post("/orders/add",verifyToken, checkRoles(["order-write"]),async(req,res)=>{
    const {customer_id,product_name,amount,order_date}= req.body
    const newOrd=await createNewOrder(customer_id,product_name,amount,order_date)
    res.status(201).send(newOrd)
})
export default router;