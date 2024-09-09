import fetch from 'node-fetch'; 
import { HttpsProxyAgent } from 'https-proxy-agent'; 

const username = 'm4teelias';
const password = 'Diana110604'; 
const agent = new HttpsProxyAgent(`https://${username}:${password}@unblock.oxylabs.io:60000`);
// Ignore the certificate 
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; 
const response = 
	await fetch('https://ip.oxylabs.io/location',  { 
		method: 'get',
		agent: agent,
	});


console.log(await response.text());
