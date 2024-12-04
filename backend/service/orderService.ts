import orderRepository from "../repository/orderRepository";

export async function getOrders() {
    return orderRepository.getOrders();
}
export async function getOrderById(id) {
    return orderRepository.getOrderById(id);
    
}
export async function createNewOrder(customer_id,product_name,amount,order_date) {
    return orderRepository.createNewOrder(customer_id,product_name,amount,order_date);
}
