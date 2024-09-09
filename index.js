// npm install axios http-proxy-agent https-proxy-agent
const axios = require("axios");
const { HttpsProxyAgent } = require("https-proxy-agent");

const url = "https://gota.io";
const proxy = "http://43.229.11.86:5724:mtvtwuwn:tehpnytkt02b";
const httpsAgent = new HttpsProxyAgent(proxy);
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
axios({
	url,
	httpsAgent,
	method: 'GET',
})
    .then(response => console.log(response.data))
    .catch(error => console.log(error));
