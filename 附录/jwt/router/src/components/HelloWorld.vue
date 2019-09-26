<template>
    <div>
        <button @click="getdata">获取数据</button>
        <button @click="logout">注销</button>
    </div>
</template>

<script>
import request from '../utils/request'
export default {
    methods:{
        getdata(){
            request({
                url:"/getdata",
                method:'get',
            }).then(res => {
                console.log(res);
            }).catch((err) => {
                console.log(err)
            })
        },
        logout(){
            localStorage.setItem("token","");
            console.log(localStorage.getItem("token"))
            location.reload();
        }
    }
};
</script>