<template>
    <div>
        <button @click="reset">重置数量</button>
    </div>
</template>

<script>
import store from "../store"
export default {
    methods:{
        reset(){
            store.reset();
        }
    }
}
</script>