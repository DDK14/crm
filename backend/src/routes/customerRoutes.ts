import express from 'express'
import { getCustomers ,getCustomerById,createNewCustomer} from '../service/customerService';
const router=express.Router();
router.get("/", async (req,res) =>{
    const cust=await getCustomers()
    res.json(cust)
})
router.get("/:id", async (req,res) =>{ 
    const id=req.params.id
    const byId=await getCustomerById(id)
    res.send(byId)
});
router.post("/add",async(req,res)=>{
    const {name,email,phone,address}= req.body
    const newCust=await createNewCustomer(name,email,phone,address)
    res.status(201).send(newCust)
})
module.exports=router;