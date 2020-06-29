require('@babel/polyfill/noConflict');
const axios = require('axios');

const mailChimpAPI = process.env.MAILCHIMP_API_KEY;
const mailChimpListID = process.env.MAILCHIMP_LIST_ID;
const mcRegion = mailChimpAPI.split("-").pop();

export async function handler(event, context) {
    
    let errorMessage = null;

    if (!mailChimpListID) {
        errorMessage = "No LIST_ID supplied";
        return {
            statusCode: 201,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": "true"
            },
            body: errorMessage
        };
        // callback(errorMessage);
    }

    const options = {
        method: 'GET',
        url: `https://${mcRegion}.api.mailchimp.com/3.0/lists/${mailChimpListID}`,
        headers: {
            "Authorization": `apikey ${mailChimpAPI}`,
            "Content-Type": "application/json"
        }
      };
    try {
        const response = await axios(options);
        const member_count = response.data.stats.member_count; 
        const next_target = Math.ceil(member_count/5000)*5000;
        return {
            statusCode: 200,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": "true"
            },
            body: JSON.stringify({
                member_count: member_count,
                target: next_target
            })
            // body: JSON.parse(`{member_count: ${member_count}}`)
        };
    } catch (error) {

        return {
            statusCode: 400,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": "true"
            },
            body: JSON.stringify(error.response.data)
        };
    }
}