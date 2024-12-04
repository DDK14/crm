"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCustomers = getCustomers;
exports.getCustomerById = getCustomerById;
exports.createNewCustomer = createNewCustomer;
const customerRepository_1 = __importDefault(require("../repository/customerRepository"));
// getOut
async function getCustomers() {
    return customerRepository_1.default.getCustomers();
}
async function getCustomerById(id) {
    return customerRepository_1.default.getCustomerById(id);
}
async function createNewCustomer(name, email, phone, address) {
    return customerRepository_1.default.createNewCustomer(name, email, phone, address);
}
//# sourceMappingURL=customerService.js.map