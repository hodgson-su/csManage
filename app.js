const path = require('path');
const express = require('express');

const proxy = require('http-proxy-middleware');
const config = require('./config');

const app = global.app = express();
app.use('/',express.static(path.join(__dirname,config.path)));

//interface proxy
app.use('/api',proxy({
	target:'http://123.207.151.199:3000',// target host
	changeOrigin:true,					// needed for virtual hosted sites
	ws:true,							// proxy weksokets
	pathRewrite:{
		'^/api/':'/'
	}
}));

app.listen(config.port,function(){
	console.log(`[${new Date()}] app start : ${config.port}`);
});

module.exports = app;