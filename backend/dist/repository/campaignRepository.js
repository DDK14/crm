"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../database");
async function createCampaignSegments(segmentName) {
    // Fetch conditions for the segment
    const [conditions] = await database_1.pool.query('SELECT * FROM audience_conditions WHERE segment_name = ? ORDER BY id', [segmentName]);
    if (conditions.length === 0) {
        throw new Error('No conditions found for the specified segment.');
    }
    // Base query to calculate total spending, visits, and last visit
    let cal = `
        SELECT 
            c.id AS customer_id,
            c.name AS customer_name,
            SUM(o.amount) AS total_spending,
            COUNT(o.order_id) AS total_visits,
            MAX(o.order_date) AS last_visit
        FROM 
            customer c
        LEFT JOIN 
            orders o
        ON 
            c.id = o.customer_id
        GROUP BY 
            c.id   
    `;
    let whereClauses = conditions.map((cond) => {
        return `(${cond.conditions_json.key}${cond.conditions_json.operator}${cond.conditions_json.value})`;
    }).join(' AND ');
    // Final query with conditions
    let finalQuery = `${cal} HAVING ${whereClauses}`;
    console.log(finalQuery, "final");
    return finalQuery;
}
;
async function getCampaignById(segment_id) {
    const [rows] = await database_1.pool.query(`
        SELECT *
        FROM campaignTable
        WHERE segment_id=?
        `, [segment_id]);
    return rows;
}
async function getCampaigns() {
    const [y] = await database_1.pool.query("SELECT * FROM campaignTable");
    console.log(y);
    return y;
}
exports.default = { getCampaigns, getCampaignById, createCampaignSegments };
//# sourceMappingURL=campaignRepository.js.map