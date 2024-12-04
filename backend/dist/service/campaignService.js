"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCampaigns = getCampaigns;
exports.getCampaignById = getCampaignById;
exports.createCampaignSegments = createCampaignSegments;
const campaignRepository_1 = __importDefault(require("../repository/campaignRepository"));
async function getCampaigns() {
    return campaignRepository_1.default.getCampaigns();
}
async function getCampaignById(id) {
    return campaignRepository_1.default.getCampaignById(id);
}
async function createCampaignSegments(segmentName) {
    return campaignRepository_1.default.createCampaignSegments(segmentName);
}
//# sourceMappingURL=campaignService.js.map