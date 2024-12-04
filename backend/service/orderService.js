import { createNewOrder, getOrderById, getOrders } from "../repository/orderRepository";

export async function getOrders() {
    return getOrders();
}
export async function getOrderById(id) {
    return getOrderById(id);
    
}
export async function createNewOrder(customer_id,product_name,amount,order_date) {
    return createNewOrder(customer_id,product_name,amount,order_date);
}
