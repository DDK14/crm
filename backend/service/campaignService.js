import { createCampaignSegments, getCampaignById, getCampaigns } from "../repository/campaignRepository";

export async function getCampaigns() {
    return getCampaigns();
}
export async function getCampaignById(id) {
    return getCampaignById(id);
}
export async function createCampaignSegments(segmentName) {
    return createCampaignSegments(segmentName);
}