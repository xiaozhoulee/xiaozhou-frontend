<template>
  <div id="app">
<child v-bind:message="parentMsg" v-on:listenToChildEvent="showMsgFromChild"></child>

  </div>
</template>

<script>
import child from './components/Child.vue'
export default {
  name:'app',
  data(){
    return {
      parentMsg:"hello,child"
    }
  },
  methods:{
    showMsgFromChild:function(data){
      console.log(data)
    }
  },
  components:{
    child
  }
}
</script>