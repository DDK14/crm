"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../database");
async function getCustomers() {
    const [rows] = await database_1.pool.query("SELECT * FROM customer");
    return rows;
}
async function getCustomerById(id) {
    const [rows] = await database_1.pool.query(`
        SELECT *
        FROM customer
        WHERE id=?
        `, [id]);
    return rows[0];
}
async function createNewCustomer(name, email, phone, address) {
    const [result] = await database_1.pool.query(`
        INSERT INTO customer(name,email,phone,address)
        VALUES(?,?,?,?)
        `, [name, email, phone, address]);
    const id = result.insertId;
    return getCustomerById(id);
}
exports.default = { getCustomers, getCustomerById, createNewCustomer };
//# sourceMappingURL=customerRepository.js.map