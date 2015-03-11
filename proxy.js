var http = require('http');
var request = require('request');

process.argv.forEach(function(val, index, array) {
    if (val.indexOf('=') !== -1) {
        var arg = val.split("=");
        process.env[arg[0]] = arg[1];
    }
});
var remoteServer = 'http://' + (process.env['-to'] || 'www.google.com');
var proxyServer = +process.env['-from'] || 1987;

http.createServer(function (req, resp) {
	req.pipe(request(remoteServer + req.url)).pipe(resp);
}).listen(proxyServer, function(){
	console.log('Proxyserver started at ' + proxyServer);
});