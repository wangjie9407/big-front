const Router = require('koa-router');
const login = require('../apis/login');

const router = new Router();

router.get('/login', login.login)

module.exports = router