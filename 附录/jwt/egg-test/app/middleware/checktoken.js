module.exports = () => {
    return async function (ctx, next) {
        if (ctx.request.header['token']) {
            let token = ctx.request.header['token'];
            ctx.app.jwt.verify(token, ctx.app.config.jwt.secret);
            ctx.cookies.set('token', token, {
                maxAge: 10 * 1000,
                httpOnly: false,
                overwrite: true,
                signed: false
            });
            await next();
        } else {
            ctx.status = 401;
            ctx.body = {
                message: '没有token'
            }
            return;
        }
    }
};