'use strict';

const Service = require('egg').Service;

class LoginService extends Service {
    async index() {
      try{
        const md5=require('md5-node');
        let username = this.ctx.request.body.username;
        let password = this.ctx.request.body.password;
        let mysql_password = md5(password)
        console.log(username)
        console.log("上下分别是密码和账号")
        console.log(mysql_password)
        let log = await this.app.model.User.findOne({
          where: {
            username: username
          }
        });
        if (log == null) {
          return {
            code:30000,
            data:"用户不存在"
          }
        }
        //判断密码是否正确，正确则登录成功
        if (mysql_password == log.password) {
          console.log("密码正确")
          const token = this.app.jwt.sign({ username:username }, this.app.config.jwt.secret);
          return {
            code:20000,
            data:token
          };
        } else {
          return {
            code:30000,
            data:"密码错误！"
          };
        }
      }catch(error){
        return{
          code:30000,
          data:"失败"
        }
      }
      }
}

module.exports = LoginService;
