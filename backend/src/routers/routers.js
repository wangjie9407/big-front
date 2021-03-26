const koaCombine = require('koa-combine-routers');
const login = require('./login')

module.exports = koaCombine(login)
