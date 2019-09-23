<template>
  <div id='login'>
    <!-- <form action="" method="post" @submit="login">
      <label for="" style="margin-top: 22px;">账户</label><input type="text" name="" id="" v-model="loginForm.username">
      <label for="" style="margin-top: 22px;">密码</label><input type="password" name="" id="" v-model="loginForm.password">
      <router-link to='/MenuList'><el-button type="primary" class="log" @click="login">用户登陆</el-button></router-link>
      </form> -->
      
      <form @submit.prevent="login">
        <h2>学生管理系统</h2>
        <input type="text" placeholder="用户名" class="user" v-model="username">
        <input type="password" placeholder="密码" class="pass" v-model="password">
       <button class="btn" type="primary" >登陆</button>
      </form>
  </div>
</template>

<script>
import axios from 'axios';
import md5 from 'js-md5';
export default {
  name: "login",
  data() {
    return {
        username: '',
        password: ''
    };
  },
  methods: {
    login() {
      axios
        .post("http://127.0.0.1:7001/login", {
          username: this.username,
          // password: this.password
          password: md5(this.password)
        })
        .then(res => {
          if (res.data.data == "密码错误！" ) {
            alert("密码错误！");
          };
          console.log(res.data.data)
          if (res.data.data == "用户不存在") {
            alert("用户不存在");   
          };
          if (res.data.data == "登录成功") {
            this.$router.push("/MenuList");

            console.log(res.data)
          };
        })
        .catch(err => {
          console.log(err);
        });
    }

}
}
</script>

<style scoped>
*{
  padding: 0;
  margin: 0;
}
h2{
  color: #e9e9e9
}
#login{
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #2d3a4b;
}
form{
  width: 300px;
  margin: 0 auto;
  margin-top: 12%;
}
input{
  width: 240px;
  height: 30px;
  display: block;
  border-radius: 10px;
  border: 1px solid #c2c0c0;
  margin-top: 16px;
  background-color: #454545;
  float: left;
  color: #f7f7f7;
  padding-left: 10px;
}
label{
  float: left;
  color: #c2c0c0;
  margin-right: 10px;
  float: left;
}
.log{
  margin-top: 20px;
  margin-left: 108px;
}
.btn{
  padding: 0;
  width: 51.2%;
  height: 37px;
  background-color: #0091ff;
  border: 0;
  color: white;
  margin: 0 auto;
  margin-left: 16%;
  margin-top: 7%;
  border-radius: 10px;
}
</style>
