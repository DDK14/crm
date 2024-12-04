import campaignRepository from '../repository/campaignRepository';

export async function getCampaigns() {
    return campaignRepository.getCampaigns();
}
export async function getCampaignById(id) {
    return campaignRepository.getCampaignById(id);
}
export async function createCampaignSegments(segmentName) {
    return campaignRepository.createCampaignSegments(segmentName);
}