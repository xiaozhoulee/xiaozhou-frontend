<template>
    <div>
        <h1>sister</h1>
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
    }
}
</script>