import express from 'express'
import {pool} from '../database'
import { getCampaigns,getCampaignById,createCampaignSegments } from '../service/campaignService';

const router=express.Router();
router.get("/campaigns", async (req,res) =>{
    const cam=await getCampaigns()
    res.json(cam)
})
router.get("/campaigns/:segment_id",async(req,res)=>{
    const seg=req.params.segment_id
    const segId=await getCampaignById(seg)
    res.send(segId)
})
router.get("/campaigns/segment/:segment_id", async(req,res)=>{
    const {segment_id}=req.params;

    const cal=`
        select c.customer_id,
        cam.campaign_id
        from
        customer_segment c
        inner join
        campaignTable cam
        on c.segment_id=cam.segment_id
        where c.segment_id=?
    `;
    const [ans]=await pool.query(cal,[segment_id]);
    res.json({success:true , data:ans})
})
router.get('/segment/:segmentName', async (req, res) => {
    const { segmentName } = req.params;

    try {
        const x = await createCampaignSegments(segmentName);
        console.log(x);
        const [results] = await pool.query(x);
        console.log(results,"results")
        res.json({ segmentName, results });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message });
    }
});