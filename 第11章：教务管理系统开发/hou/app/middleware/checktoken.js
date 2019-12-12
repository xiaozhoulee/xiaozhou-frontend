module.exports = () => {
    return async function (ctx, next) {
        if (ctx.request.header['token']) {
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