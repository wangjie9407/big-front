const Router = require('koa-router');
const loginObj  = require('../apis/login.js');

const router = new Router();

router.get('/login', loginObj.login);
router.get('/getCaptcha', loginObj.getCaptcha);

module.exports =  router