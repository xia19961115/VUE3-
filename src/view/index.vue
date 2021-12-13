<template>
   <div>
      <p @click="handleClick('xiaosha')">{{nickname}}</p> 
       index页面
       
       <router-view></router-view>
   </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import {useStore} from 'vuex'
export default {
    name:'index',
    setup(){
       const store =useStore()
       const data = reactive({
           nickname:store.state.nickname,
           handleClick(name='dashuaibi'){
               store.commit('changeNickname',name)
           }
       })

        return{
            ...toRefs(data),
            // 要结构 ...toRefs(store.state)  state的数据才是响应式
            ...toRefs(store.state)
        }
    }
}
</script>
