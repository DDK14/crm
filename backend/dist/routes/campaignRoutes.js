"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = require("../database");
const campaignService_1 = require("../service/campaignService");
const router = express_1.default.Router();
router.get("/campaigns", async (req, res) => {
    const cam = await (0, campaignService_1.getCampaigns)();
    res.json(cam);
});
router.get("/campaigns/:segment_id", async (req, res) => {
    const seg = req.params.segment_id;
    const segId = await (0, campaignService_1.getCampaignById)(seg);
    res.send(segId);
});
router.get("/campaigns/segment/:segment_id", async (req, res) => {
    const { segment_id } = req.params;
    const cal = `
        select c.customer_id,
        cam.campaign_id
        from
        customer_segment c
        inner join
        campaignTable cam
        on c.segment_id=cam.segment_id
        where c.segment_id=?
    `;
    const [ans] = await database_1.pool.query(cal, [segment_id]);
    res.json({ success: true, data: ans });
});
router.get('/segment/:segmentName', async (req, res) => {
    const { segmentName } = req.params;
    try {
        const x = await (0, campaignService_1.createCampaignSegments)(segmentName);
        console.log(x);
        const [results] = await database_1.pool.query(x);
        console.log(results, "results");
        res.json({ segmentName, results });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});
exports.default = router;
//# sourceMappingURL=campaignRoutes.js.map