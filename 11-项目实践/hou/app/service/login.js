'use strict';

const Service = require('egg').Service;

class LoginService extends Service {
    async index() {
        const md5=require('md5-node');
        let name = this.ctx.request.body.username;
        console.log(name);
        let password = this.ctx.request.body.password
        

        console.log(password);
        let log = await this.app.model.User.findOne({
          where: {
            name: name
          }
        });
        // console.log(log)
        if (log == null) {
          return "用户不存在";
        }
        //判断密码是否正确，正确则登录成功
        if (password == log.password) {
          // this.ctx.session.user = user;  //设置session
          return "登录成功";
    
          // console.log("sssssssss")
        } else {
          // console.log("zzzzzzzzz")
          return "密码错误！";
        }
      }
}

module.exports = LoginService;
