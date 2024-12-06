import express from 'express'
import { getCustomers ,getCustomerById,createNewCustomer} from '../service/customerService';
import  checkRoles  from '../middleware/validateRole';
import  verifyToken  from '../middleware/verifyToken';
const router=express.Router();

router.get("/", verifyToken, checkRoles(["customer-reader"]),async (req,res) =>{
    const cust=await getCustomers()
    console.log("called123")
    res.json(cust)
})
router.get("/:id", verifyToken, checkRoles(["customer-reader"]),async (req,res) =>{ 
    const id=req.params.id
    const byId=await getCustomerById(id)
    res.send(byId)
});
router.post("/add",verifyToken, checkRoles(["customer-write"]),async(req,res)=>{
    const {name,email,phone,address}= req.body
    const newCust=await createNewCustomer(name,email,phone,address)
    res.status(201).send(newCust)
})
export default router;