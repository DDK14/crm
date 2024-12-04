
export async function getCustomers() {       //get complete table
    const [rows]= await pool.query("SELECT * FROM customer")
    return rows;
}

export async function getCustomerById(id) {           //get data from id
    const [rows]= await pool.query(`
        SELECT *
        FROM customer
        WHERE id=?
        `,[id]
    )   
    return rows[0]
    
}

export async function createNewCustomer(name,email,phone,address) {
    const result=await pool.query(`
        INSERT INTO customer(name,email,phone,address)
        VALUES(?,?,?,?)
        `,[name,email,phone,address]
    )
    const id=result.insertId
    return getCustomerById(id)
}
