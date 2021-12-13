<template>
    <div>
        <button @click="handle">点击</button>
        <!--teleport 模态框组件 vue3.0新增   to 表示触发在那个元素上-->
        <teleport to="body">
            <div v-if="open" class="model">
                <!-- 真正的内容 -->
                <div>
                    这是一个弹窗
                    <button @click="handle2">点击</button>
                </div>
            </div>
        </teleport>
    </div>
</template>

<script>
import {reactive, toRefs} from 'vue'
export default {
    setup() {
        const data =reactive({
            open:false,
            handle(){
                data.open=true
            },
            handle2(){
                data.open=false
            }
        })
        return{
            ...toRefs(data)
        }
    },
}
</script>

<style  scoped>
.model{
    position:absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}
.model div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    width: 300px;
    height: 300px;
    padding: 5px;
}

</style>