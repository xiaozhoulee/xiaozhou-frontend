<template>
    <div>
        <h1>brother <button @click="changeData">改变数据</button></h1>
        <p>{{state.message}}</p>
    </div>
</template>

<script>
import store from "../store"
export default {
    data(){
        return {
            state:store.state
        }
    },
    methods:{
        changeData(){
            store.setStateMessage("brother data")
        }
    }
}
</script>