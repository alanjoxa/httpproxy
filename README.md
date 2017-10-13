# httpproxy
This is an HTTP proxy server written in NodeJS. 
Proxy for regular HTTP traffic and Websocket connection.

By default the server proxies from localhost:8000 to www.google.com
## Usage Examples
- Forwarding all requests from localhost:8000 (default) to localhost:3000

```
node proxy.js -to=localhost:3000 
```
