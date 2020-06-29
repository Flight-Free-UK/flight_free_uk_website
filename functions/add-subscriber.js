require('@babel/polyfill/noConflict');
const axios = require('axios');

const mailChimpAPI = process.env.MAILCHIMP_API_KEY;
const mailChimpListID = process.env.MAILCHIMP_LIST_ID;
const mcRegion = mailChimpAPI.split("-").pop();

export async function handler(event, context) {
    
    let errorMessage = null;

    const data = JSON.parse(event.body);

    const subscriber = {
        "email_address": data.email,
        "status": "subscribed",
        "merge_fields": {
            "FNAME": data.first_name,
            "LNAME": data.last_name
        }
    }

    const subscriberBody = JSON.stringify(subscriber);

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
    }

    const options = {
        method: 'POST',
        url: `https://${mcRegion}.api.mailchimp.com/3.0/lists/${mailChimpListID}/members`,
        headers: {
            "Authorization": `apikey ${mailChimpAPI}`,
            "Content-Type": "application/json"
        },
        data: subscriberBody
      };

      try {
        
        const response = await axios(options);
    
        let data = response.data;
        return {
            statusCode: 201,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": "true"
            },
            body: JSON.stringify(data)
        };

      } catch (error) {

        return {
            statusCode: 202,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": "true"
            },
            body: JSON.stringify(error.response.data)
        };
      }
}