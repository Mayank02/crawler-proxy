# crawler proxy

A simple server to help crawl websites and bypass ip blocking or banning, it will download html and render javascript using puppeteer, and return the rendered html - protecting your computer/server ip from the target you try to scrape.

Live demo: [return a rendered github page](https://a42-crawler-proxy-1.herokuapp.com/crawl-render/https://github.com), [return an unrendered github page](https://a42-crawler-proxy-1.herokuapp.com/crawl-plain/https://github.com).
You can use and play around with `a42-crawler-proxy-1`, `a42-crawler-proxy-2`, and `a42-crawler-proxy-3`, they are free dynos so they will be very slow.

to run:
```
npm start
```

routes:
```
GET http://localhost:3000/crawl-plain/<URL>
GET http://localhost:3000/crawl-render/<URL>

# example:

GET http://localhost:3000/crawl-plain/https://github.com
GET http://localhost:3000/crawl-render/https://github.com
```

Both routes will return plain html, `crawl-plain` is much faster since it doesn't need to run a full scale browser.
When using `crawl-render` it will run a browser and keep using it, you might want to change that behavior if you use something like aws lambda or google cloud functions.

---

deploy to heroku:
```
heroku create

# when cloning
heroku git:remote -a [app name]
```
```
git push heroku master
```
Set buildpacks for the app to run properly on heroku
```
heroku buildpacks:set jontewks/puppeteer
heroku buildpacks:add --index 1 heroku/nodejs
heroku buildpacks # should output node, and then puppeteer

# if you need asian languages like japanese and korean:
heroku buildpacks:set https://github.com/CoffeeAndCode/puppeteer-heroku-buildpack.git
```
```
heroku open
```

debug:
run: ```npm run debug```, get a websocket url and open:
```
chrome-devtools://devtools/bundled/js_app.html?experiments=true&v8only=true&<WEBSOCKET_URL>
```

### it is recommended to spread it across regions to promise different ip addresses
```
heroku create --region eu
```
