'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
    async login() {
        let username = this.ctx.request.body.username;
        let password = this.ctx.request.body.password;
        if (this.checkLogin(username, password)) {
            const token = this.app.jwt.sign({
                username: username
            }, this.app.config.jwt.secret);
            // this.ctx.cookies.set('token', token, {
            //     maxAge: 10 * 1000,
            //     httpOnly: false,
            //     overwrite: true,
            //     signed: false,
            // });
            console.log(token);
            this.ctx.body = {
                code:200,
                token: token
            };
        } else {
            this.ctx.body = {
                code:500
            };
        }
    }

    checkLogin(username, password) {
        if (username === "test" && password === "123456") {
            return true;
        } else {
            return false;
        }
    }
}

module.exports = LoginController;