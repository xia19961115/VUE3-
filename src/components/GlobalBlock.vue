<template>
    <div @click="handle">
       这个是全局注册的组件GlobalBlock---{{msg}}
    </div>
    <div v-for="(item,index) in listArr" :key="index">{{item}}</div>
    <button @click="arrClick">按钮</button>
</template>
<script>
import { reactive, toRefs } from 'vue'
export default {
    name:'GlobalBlock',
    props:{
        msg:{
            type:Number
        }
    },
    setup(props,{emit}){
        const data = reactive({
            list:4,
            listArr:[1,2,3,4,5],
             handle(){
                 emit('handleClike',this.list)
             },
            //  似乎vue3.0中没用set delete方法了 直接操作数组 对象就能渲染在页面上
             arrClick(){
                 data.listArr.push(8)
             } 
        })
        return{
            ...toRefs(data)
        }
    }
}
</script>