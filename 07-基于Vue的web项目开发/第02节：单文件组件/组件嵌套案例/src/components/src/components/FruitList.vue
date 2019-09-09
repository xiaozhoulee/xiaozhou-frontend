<template>
  <div class="fruitlist">
    <h1>Hello this is {{ user_name }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'fruitlist',
    data() {
      return {
        user_name:"fruitlist"
      }
    }
  }
</script>
<style scoped>
  .fruitlist {
    color: skyblue;
  }
</style>