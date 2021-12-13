<template>
    <div>
        about页面
        {{li}}
        {{name}}
        <div @click="handleClick">{{newname}}</div>
        <NewList num='8' @change="handleMy"/>
    </div>
</template>
<script>
import NewList from '../components/NewList.vue'
import { onMounted, reactive, toRefs, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
export default {
    name:'about',
    components:{NewList},
    setup(){
        const route =useRoute()
        const data =reactive({
            li:'',
            name:'',
            newname: 'yunmu',
            handleMy(e){
                console.log(e)
            },
            handleClick(){
                data.newname += '1'
            }
        })
        watchEffect(()=>{
            console.log('这里监听响应式数据的变化',data.newname)
        })

        onMounted(()=>{
            // console.log(this);
            console.log(route.path);
            data.li =route.query.age
        })
        return {
            ...toRefs(data),
            // route
        }
    }
}
</script>