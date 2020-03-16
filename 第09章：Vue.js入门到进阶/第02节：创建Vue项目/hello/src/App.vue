<template>
  <!-- 网页模板，编写html文件 -->
  <div>
    <h1 :title="message">{{message}}</h1>
    <button @click="showHi">showHi</button>
  </div>
</template>

<script>
// js代码 
export default {
  data(){
    return {
      message:"hello vue"
    }
  },
  methods:{
    showHi(){
      alert("h1")
    }
  }
}
</script>

<style>
/* css代码 */
</style>
