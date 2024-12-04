import express from 'express'
import cors from 'cors'
import customerRoutes from './routes/campaignRoutes.ts'
import orderRoutes from './routes/orderRoutes.ts'
import campaignRoutes from './routes/campaignRoutes.ts'
import {pool} from './database.js'
const app= express()

app.use(cors());     //to accept api requests

app.use(express.json())




app.use('/customer',customerRoutes)
app.use('/orders',orderRoutes)
app.use('/campaign',campaignRoutes)

//error handling
app.use((err, req, res, next)=> {
    if (res.headersSent) {
      return next(err)
    }
    res.status(500)
    res.render('error', { error: err })
  }
)

app.post("/comm",async(req,res)=>{
    const {segment_id,message}=req.body
    const ans = `
            SELECT c.customer_id, cam.campaign_id
            FROM customer_segment c
            INNER JOIN campaignTable cam
            ON c.segment_id = cam.segment_id
            WHERE c.segment_id = ?`;
        
        const [results] = await pool.query(ans, [segment_id]);
        const logQuery = `
            INSERT INTO communications_log (customer_id, campaign_id, com_status)
            VALUES (?, ?, ?)`;

        for (const { customer_id, campaign_id } of results) {
            await pool.query(logQuery, [customer_id, campaign_id, message]);
        }

        res.json({
            success: true,
            message: "Messages have been successfully logged in the communication log."
        });
})


app.listen(8080,() =>{
    console.log('Server is running on port 8080')
})

