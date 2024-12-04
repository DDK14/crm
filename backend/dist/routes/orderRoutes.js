"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const orderService_1 = require("../service/orderService");
const router = express_1.default.Router();
router.get("/orders", async (req, res) => {
    const ord = await (0, orderService_1.getOrders)();
    res.json(ord);
});
router.get("/orders/:id", async (req, res) => {
    const order_id = req.params.id;
    const byId1 = await (0, orderService_1.getOrderById)(order_id);
    res.send(byId1);
});
router.post("/orders/add", async (req, res) => {
    const { customer_id, product_name, amount, order_date } = req.body;
    const newOrd = await (0, orderService_1.createNewOrder)(customer_id, product_name, amount, order_date);
    res.status(201).send(newOrd);
});
exports.default = router;
//# sourceMappingURL=orderRoutes.js.map