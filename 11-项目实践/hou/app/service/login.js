'use strict';

const Service = require('egg').Service;

class LoginService extends Service {
    async index() {
        const md5=require('md5-node');
        let username = this.ctx.request.body.username;
        let password = this.ctx.request.body.password;
        let mysql_password = md5(password)
        console.log(username)
        console.log("上下分别是密码和账号")
        console.log(mysql_password)
        let log = await this.app.model.User.findOne({
          where: {
            name: username
          }
        });
        if (log == null) {
          return "用户不存在";
        }
        //判断密码是否正确，正确则登录成功
        if (mysql_password == log.password) {
          console.log("密码正确")
          const token = this.app.jwt.sign({ name:username }, this.app.config.jwt.secret);
          return token
        } else {
          return "密码错误！";
        }
      }
}

module.exports = LoginService;
