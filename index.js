// npm install axios http-proxy-agent https-proxy-agent
const axios = require("axios");
const HttpProxyAgent = require("http-proxy-agent");
const HttpsProxyAgent = require("https-proxy-agent");

const url = "https://gota.io";
const proxy = "http://1b072891695ddc068abbd73daecb42d704f9059c@api.zenrows.com:8001";
const httpAgent = new HttpProxyAgent(proxy);
const httpsAgent = new HttpsProxyAgent(proxy);
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
axios({
	url,
	httpAgent,
	httpsAgent,
	method: 'GET',
})
    .then(response => console.log(response.data))
    .catch(error => console.log(error));
