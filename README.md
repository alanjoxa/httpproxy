# httpproxy
This is an HTTP proxy server written in NodeJS. 


By default the server proxies from localhost:8000 to www.google.com
## Usage Examples
- Forwarding all requests from localhost:8000 (default) to localhost:3000

```
node proxy.js -to=localhost:3000 
```

- Forwarding all requests from localhost:7777 to www.domain.com

```
node proxy.js -from=7777 -to=www.domain.com
```

