<template>
    <div @click="handleChange">
        点击事件
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
    emits:['change'],
    props:['num'],
    setup(props,context){
        console.log(props.num);
        const { emit } =context
        const data = reactive({
            handleChange(){
                emit('change',{name:'yunmu'})
            }
        })

        return {
            ...toRefs(data)

        }
    }
}
</script>