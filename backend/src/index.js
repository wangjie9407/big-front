const Koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body');
const cors  = require('@koa/cors');
const helmet = require('koa-helmet');
const statics = require('koa-static');
const routers = require('./routers/routers.js');
const koajson = require('koa-json');
const koacompose = require('koa-compose');

const app = new Koa();
const router = new Router();
const path = require('path');
const middleware = koacompose([
    koaBody(),
    cors(),
    routers(),
    helmet(),
    statics(path.join(__dirname,'../public')),
    router.allowedMethods(), // 未经处理的请求会反应404
])

app.use(middleware) 

app.listen(3000);