<template>
    <form @submit.prevent="login">
        <input type="text" v-model="formData.username" placeholder="用户名">
        <input type="password" v-model="formData.password" placeholder="密码">
        <input type="submit" value="登录">
    </form>
</template>

<script>
import request from '../utils/request'
export default {
    data(){
        return {
            formData:{
                username:'',
                password:''
            }
        }
    },
    methods:{
        login(){
            request({
                url:"/login",
                method:'post',
                data:this.formData
            }).then(res => {
                if(res.code === 200){
                    console.log(res);
                    localStorage.setItem("token",res.token);
                    this.$router.push("/layout")
                }else{
                    alert("登录失败")
                }
            }).catch((err) => {
                console.log(err)
            })
        }
    }
}
</script>