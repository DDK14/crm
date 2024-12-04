"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const customerService_1 = require("../service/customerService");
const router = express_1.default.Router();
router.get("/", async (req, res) => {
    const cust = await (0, customerService_1.getCustomers)();
    res.json(cust);
});
router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const byId = await (0, customerService_1.getCustomerById)(id);
    res.send(byId);
});
router.post("/add", async (req, res) => {
    const { name, email, phone, address } = req.body;
    const newCust = await (0, customerService_1.createNewCustomer)(name, email, phone, address);
    res.status(201).send(newCust);
});
exports.default = router;
//# sourceMappingURL=customerRoutes.js.map