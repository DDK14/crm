"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const customerRoutes_js_1 = __importDefault(require("./routes/customerRoutes.js"));
const orderRoutes_js_1 = __importDefault(require("./routes/orderRoutes.js"));
const campaignRoutes_js_1 = __importDefault(require("./routes/campaignRoutes.js"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)()); //to accept api requests
app.use(express_1.default.json());
console.log("called123");
app.use('/customer', customerRoutes_js_1.default);
app.use('/orders', orderRoutes_js_1.default);
app.use('/campaign', campaignRoutes_js_1.default);
//error handling
app.use((err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }
    res.status(500);
    res.render('error', { error: err });
});
// app.post("/comm",async(req,res)=>{
//     const {segment_id,message}=req.body
//     const ans = `
//             SELECT c.customer_id, cam.campaign_id
//             FROM customer_segment c
//             INNER JOIN campaignTable cam
//             ON c.segment_id = cam.segment_id
//             WHERE c.segment_id = ?`;
//         const [results] = await pool.query(ans, [segment_id]);
//         const logQuery = `
//             INSERT INTO communications_log (customer_id, campaign_id, com_status)
//             VALUES (?, ?, ?)`;
//         for (const { customer_id, campaign_id } of results) {
//             await pool.query(logQuery, [customer_id, campaign_id, message]);
//         }
//         res.json({
//             success: true,
//             message: "Messages have been successfully logged in the communication log."
//         });
// })
app.listen(8081, () => {
    console.log('Server is running on port 8081');
});
//# sourceMappingURL=app.js.map