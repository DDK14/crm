import customerRepository from "../repository/customerRepository";

// getOut
export async function getCustomers() {
    
    return customerRepository.getCustomers();
}

export async function getCustomerById(id:number) {           //get data from id
    return customerRepository.getCustomerById(id);
    
}

export async function createNewCustomer(name,email,phone,address) {
    return customerRepository.createNewCustomer(name,email,phone,address);
}