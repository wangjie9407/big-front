const Koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body');
const cors = require('@koa/cors');
const routers = require('./routers/routers');
const helmet = require('koa-helmet');
const static = require('koa-static');
const path = require('path')


const app = new Koa();
const router = new Router();

app.use(koaBody())
    .use(cors())
    .use(routers())
    .use(helmet())
    .use(static(path.join(__dirname,'../public')))
    .use(router.allowedMethods()); // 未经处理的请求会反应404

app.listen(3000);