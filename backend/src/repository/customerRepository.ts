import {pool} from '../database'
async function getCustomers() {       //get complete table
    const [rows]= await pool.query("SELECT * FROM customer")
    console.log(rows,"rows")
    return rows;
}

 async function getCustomerById(id) {           //get data from id
    const [rows]= await pool.query(`
        SELECT *
        FROM customer
        WHERE id=?
        `,[id]
    )   
    return rows[0]
    
}

 async function createNewCustomer(name,email,phone,address) {
    const [result]: any=await pool.query(`
        INSERT INTO customer(name,email,phone,address)
        VALUES(?,?,?,?)
        `,[name,email,phone,address]
    )
    const id=result.insertId
    return getCustomerById(id)
}

export default {getCustomers,getCustomerById,createNewCustomer}