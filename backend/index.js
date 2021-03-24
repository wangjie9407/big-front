const Koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body');
const cors = require('@koa/cors');


const app = new Koa();
const router = new Router();

app.use(async ctx => {
  ctx.body = 'Hello World';
});
app.use(koaBody())
    .use(cors())
    .use(router.routes())
    .use(router.allowedMethods()) // 未经处理的请求会反应404

app.listen(3000);