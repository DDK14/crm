import { getCustomers,getCustomerById, createNewCustomer } from "../repository/customerRepository";
console.log(gello,"ansad")
// getOut
export async function getCustomers() {
    
    return getCustomers();
}

export async function getCustomerById(id) {           //get data from id
    return getCustomerById(id);
    
}

export async function createNewCustomer(name,email,phone,address) {
    return createNewCustomer(name,email,phone,address);
}