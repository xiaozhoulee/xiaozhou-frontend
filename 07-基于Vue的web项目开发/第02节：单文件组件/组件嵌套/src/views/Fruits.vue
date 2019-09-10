<template>
  <div id="fruits">
 <!-- 第三步：调用组件 -->
    <FruitList></FruitList>

  </div>
</template>

<script>
import FruitList from './../components/src/components/FruitList.vue'    // 第一步：引入组件

export default {
    name: 'fruits', 
    data: function () {
      return {}
    },
    components: {
       "FruitList":FruitList    // 第二步：局部注册组件
    }
  }
</script>