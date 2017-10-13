# httpproxy
This is an HTTP proxy server written in NodeJS. 
Proxy for regular HTTP traffic and Websocket connection.

## Usage Examples
- Forwarding all requests from localhost:8000 (default) to localhost:3000

```
node proxy.js -to=localhost:3000 
```

- Forwarding all requests from localhost:8080 (default) to localhost:8000

```
node proxy.js -from=8080 -to=localhost:8000 
```