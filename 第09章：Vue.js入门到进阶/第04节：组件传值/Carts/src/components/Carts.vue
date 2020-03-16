<template>
    <div>
        <ul>
            <li v-for="(v,i) of state.fruits" :key="i">
                {{v.name}}
                单价：{{v.price}}
                <Counter 
                    :qu="v.quantity"
                    :index="i"
                    @sub="sub"
                    @add ="add"
                ></Counter>
            </li>
        </ul>
        <h1>总价为：{{totalPrice}}</h1>
    </div>
</template>

<script>
import Counter from "./Counter";
import store from "../store.js"
export default {
    components:{Counter},
    data(){
        return {
            // fruits:[
            //     {
            //         name:"香蕉",
            //         price:3.2,
            //         quantity:0
            //     },{
            //         name:"苹果",
            //         price:2.2,
            //         quantity:0
            //     },{
            //         name:"鸭梨",
            //         price:1.2,
            //         quantity:0
            //     }
            // ]
            state:store.state
        }
    },
    methods:{
        sub(index){
            if(this.state.fruits[index].quantity>0){
                // this.fruits[index].quantity--
                store.sub(index);
            }
        },
        add(index){
            // this.fruits[index].quantity++
            store.add(index);
        }
    },
    computed:{
        totalPrice(){
            let total = 0;
            this.state.fruits.map(v => {
                total += v.price * v.quantity
            })
            return total.toFixed(2);
        }
    }
}
</script>