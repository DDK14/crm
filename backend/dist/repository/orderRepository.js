"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../database");
async function getOrders() {
    const [x] = await database_1.pool.query("SELECT * FROM orders");
    return x;
}
async function getOrderById(order_id) {
    const [rows] = await database_1.pool.query(`
        SELECT *
        FROM orders
        WHERE order_id=?
        `, [order_id]);
    return rows[0];
}
async function createNewOrder(customer_id, product_name, amount, order_date) {
    const [result] = await database_1.pool.query(`
        INSERT INTO orders(customer_id,product_name,amount,order_date)
        VALUES(?,?,?,?) 
        `, [customer_id, product_name, amount, order_date]);
    const newOrd = result.insertId;
    return getOrderById(newOrd);
}
exports.default = { createNewOrder, getOrderById, getOrders };
//# sourceMappingURL=orderRepository.js.map