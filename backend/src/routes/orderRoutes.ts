import express from 'express'
import { getOrders,getOrderById,createNewOrder} from '../service/orderService'

const router=express.Router()
router.get("/orders", async (req,res) =>{
    const ord=await getOrders()
    res.json(ord)
})
router.get("/orders/:id", async (req,res) =>{
    const order_id=req.params.id
    const byId1=await getOrderById(order_id)
    res.send(byId1)
})
router.post("/orders/add",async(req,res)=>{
    const {customer_id,product_name,amount,order_date}= req.body
    const newOrd=await createNewOrder(customer_id,product_name,amount,order_date)
    res.status(201).send(newOrd)
})
module.exports=router;