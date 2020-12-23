![](https://github.com/dounine/wechat-tools-base/workflows/Node.js%20CI/badge.svg) ![](https://img.shields.io/github/license/dounine/wechat-tools-base)

# wechat-tools-base

##  部署
不同应用不同端口、或者不同域名

打包
```
npm run build

```
/etc/nginx/conf.d/base.conf
```
server {
    listen       80;
    server_name 192.168.1.182;
`
    location / {
	root /etc/nginx/conf.d/base;
	index index.html index.htm;
        add_header Cache-Control no-cache;
        add_header Cache-Control private;
        expires -1s;
	try_files $uri $uri/ /index.html;
    }
}
```
复制
```
cp -rf dist/* /etc/nginx/conf.d/base 
```
