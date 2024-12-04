"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrders = getOrders;
exports.getOrderById = getOrderById;
exports.createNewOrder = createNewOrder;
const orderRepository_1 = __importDefault(require("../repository/orderRepository"));
async function getOrders() {
    return orderRepository_1.default.getOrders();
}
async function getOrderById(id) {
    return orderRepository_1.default.getOrderById(id);
}
async function createNewOrder(customer_id, product_name, amount, order_date) {
    return orderRepository_1.default.createNewOrder(customer_id, product_name, amount, order_date);
}
//# sourceMappingURL=orderService.js.map