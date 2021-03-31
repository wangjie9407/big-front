 const svgCaptcha = require('svg-captcha');

 function login(ctx){
    ctx.body = 'you are logining....'
}

function getCaptcha (ctx){
    const c = svgCaptcha.create({
        color: true
    });
    const {data, text} = c;
    ctx.body = {
        code: 200,
        data,
        text
    }
}

module.exports = {
    login,
    getCaptcha
}