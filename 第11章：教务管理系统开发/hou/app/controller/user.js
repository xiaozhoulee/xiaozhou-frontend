'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    async index() {
        const body = this.ctx.request.body;
        try {
        const user = await this.ctx.service.user.index(body)
            this.ctx.body = {
                code: 20000,
                data: user
            }
        } catch (error) {
            this.ctx.body = {
                code: 30000,
                data: "失败"
            }
        }

        // const getclazzlist = await this.ctx.service.user.index()
        // this.ctx.body=getclazzlist
    }
  
}

module.exports = UserController;
