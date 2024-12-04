export async function getOrders() {       //get complete table
    const [x]= await pool.query("SELECT * FROM orders")
    return x;
}
export async function getOrderById(order_id) {           //get data from id
    const [rows]= await pool.query(`
        SELECT *
        FROM orders
        WHERE order_id=?
        `,[order_id]
    )
    return rows[0]
    
}
export async function createNewOrder(customer_id,product_name,amount,order_date) {
    const [result]=await pool.query(`
        INSERT INTO orders(customer_id,product_name,amount,order_date)
        VALUES(?,?,?,?) 
        `,[customer_id,product_name,amount,order_date]
    )
    const newOrd=result.insertId
    return getOrderById(newOrd)
}