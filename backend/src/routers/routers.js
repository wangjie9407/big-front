const koaCombine = require('koa-combine-routers');
const login = require('./login.js');

const routers = koaCombine(login);

module.exports = routers;
