require('@babel/polyfill/noConflict');
const axios = require('axios');

import md5 from 'crypto-js/md5';

const mailChimpAPI = process.env.MAILCHIMP_API_KEY;
const mailChimpListID = process.env.MAILCHIMP_LIST_ID;
const mcRegion = mailChimpAPI.split("-").pop();

// https://us20.api.mailchimp.com/3.0/automations/a817793e45/emails/09ce57490b/queue

export async function handler(event, context) {
    
    let errorMessage = null;

    const data = JSON.parse(event.body);

    const email_id = await getUserEmailID(data.email);

    const user = {
        "email_address": data.email,
        email_id
    };

    const autoEmailBody = JSON.stringify(user);

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
        url: `https://${mcRegion}.api.mailchimp.com/3.0/automations/a817793e45/emails/09ce57490b/queue`,
        headers: {
            "Authorization": `apikey ${mailChimpAPI}`,
            "Content-Type": "application/json"
        },
        data: autoEmailBody
      };

      try {
        
        const response = await axios(options);
    
        let data = response;
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
            body: JSON.stringify(error)
        };
      }
}

async function getUserEmailID(email_address) {

    //https://us20.api.mailchimp.com/3.0/lists/355d67b4ff/members/77c262221931b85604640bd35610119b
    const id = md5(email_address);
    const options = {
        method: 'GET',
        url: `https://${mcRegion}.api.mailchimp.com/3.0/lists/${mailChimpListID}/members/${id}`,
        headers: {
            "Authorization": `apikey ${mailChimpAPI}`,
            "Content-Type": "application/json"
        }
      };

      try {
        const response = await axios(options);
        return response.data.unique_email_id;

      } catch (error) {
        return error.response.data;
      }

}
