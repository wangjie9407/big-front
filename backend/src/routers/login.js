const Router = require('koa-router');
const login  = require('../apis/login.js');

const router = new Router();

router.get('/login', login)

module.exports =  router