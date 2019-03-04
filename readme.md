# crawler proxy

A simple server to help crawl websites, it will download html and render javascript using puppeteer, and return the rendered html.

to run:
```
npm start
```

routes:
```
http://localhost:3000/crawl-plain/<URL>
http://localhost:3000/crawl-render/<URL>

# example:

http://localhost:3000/crawl-plain/https://github.com
```

Both routes will return plain html, `crawl-plain` is much faster since it doesn't need to run a full scale browser.

---

deploy to heroku:
```
heroku create
```
```
git push heroku master
```
Set buildpacks for the app to run properly on heroku
```
heroku buildpacks:set jontewks/puppeteer
heroku buildpacks:add --index 1 heroku/nodejs
heroku buildpacks # should output node, and then puppeteer
```
```
heroku open
```

debug:
run: ```npm run debug```, get a websocket url and open:
```
chrome-devtools://devtools/bundled/js_app.html?experiments=true&v8only=true&<WEBSOCKET_URL>
```
