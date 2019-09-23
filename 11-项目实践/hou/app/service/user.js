"use strict";

const Service = require("egg").Service;

class UserService extends Service {
  async index() {
    const md5 = require("md5-node");
    const body = this.ctx.request.body;
    console.log(body)

    const log = {
        name: body.username,
        password: md5(body.password),
    };
    console.log(log)
    await this.app.model.User.create(log);
    this.ctx.redirect("/")
  }

}


module.exports = UserService;
