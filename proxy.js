var http = require('http');
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var cookieParser = require('cookie-parser')

process.argv.forEach(function(val, index, array) {
    if (val.indexOf('=') !== -1) {
        var arg = val.split("=");
        process.env[arg[0]] = arg[1];
    }
});

var remotePort = +process.env['-to'];
var proxyPort = +process.env['-from'] || 8000;

var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer({
  target: {
    host: 'localhost',
    port: remotePort
  }
});

app.use(cookieParser());

app.all('*', function (req, res) {
    console.log('Proxying Web :', req.url);
    proxy.web(req, res);
});
/*
 * Listen to the `upgrade` event and proxy the
 * WebSocket requests as well.
 */
server.on('upgrade', function (req, socket, head) {
    console.log('Proxying Wso :', req.url);
    proxy.ws(req, socket, head);
});

server.listen(proxyPort);
console.log(`Listening on ${proxyPort} and proxying to ${remotePort}`);