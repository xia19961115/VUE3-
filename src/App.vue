<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- <p @click="handle">{{count}}</p>
  <p>{{addCount}}</p>
  <p ref ="aaa">123</p>
  <Boutton /> -->
  <!-- changeNum  是通过子组件的emit 触发的事件  来调用负组件的函数-->
  <!-- <HelloWorld :num ="num"  @changeNum="handleAdd"/> -->
  <!-- 全局组件 -->
  <!-- <GlobalText>
    <template #aaa>
      <div>内容</div>
    </template>
  </GlobalText>
  <GlobalBlock :msg ='listNum' @handleClike='handleChange'/> -->
  <!-- 路由相关 -->
  <!-- <router-link to="/index">主页</router-link> -->
  <!-- <router-link to="/about">关于</router-link> -->
  <button @click="handleGOindex">主页</button>
   <button @click="handleGOabout">关于</button>
  <router-view></router-view>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import {computed, onMounted, reactive, ref, toRefs, watch} from 'vue'
import { useRouter} from 'vue-router'
// import router from '../src/router/index.js'
// import Boutton from './components/Boutton.vue'
// import Data from './data'
export default {
  name: 'App',
  // components:{Boutton,HelloWorld},
  // 注意 setup 函数中没有this!!!
  // setup 里面接受2个参数  第一个props 第二个context
  setup(props,context){
    // 文件导入导出
    // const data = Data()
    console.log(props);
    console.log(context);
    /*
    context 上有attrs   emit  slots
    props 就相当于 props:[]  它可以接到到属性 值
    相当于接受参数
    
    */ 
  /* 
  路由获取 新的API
  // 跳转
  import { useRouter } from 'vue-router'
  const router =useRouter()
  使用方法:router.push({name:'About',query:{age:18}}) (后面带参数)
  // 传参 (接受的参数的页面使用)
    import { useRoute } from 'vue-router'
    const route =useRoute()
    在onMounted的时候接受
    console.log(route.query.age);
  */
    const router =useRouter()
    // const route =useRoute()
   const data =reactive({
     count:1,
     num:2,
     listNum:3,
     addCount:computed(()=>data.count+1),
     handle(){
       alert('666');
     },
    //  e 表示传递过来的参数
     handleAdd(e){
       data.num+=e
     },
     handleChange(e){
       data.listNum +=e
     },
     handleGOindex(){
      //  console.log(this.$router);
       router.push({name:'Index'})
     },
     handleGOabout(){
       router.push({name:'About',query:{age:18}})
     }
   })
  // 生命周期函数 
  // onMounted === 2.X中的 Mounted
  /*
    在Vue3.0中 第一个参数是 函数   指目标源对象  2.X就是一个data中的数据
    第二个参数 与2.X中相同
  */ 
  watch(()=>data.count,(n,o)=>{
      console.log(n);
      console.log(o);
  })
  // 获取元素的节点 (获取ref响应式的数据 或者修改 都要在后面加.value)
  const aaa= ref(null)
  


  let timer
   onMounted(()=>{  
    //  data.handleAdd()
    //  aaa.value.textContent ='6666'
    console.log(aaa.value);
     timer=setInterval(()=>{
        data.count++
            if(data.count===10){
          clearInterval(timer)
          return
        }
     },1000)
   })
   return {
    //  toRefs 可能吧对象结构 ...是展开   意思就是可以直接使用对象中的属性 而不需要用data.count
     ...toRefs(data),
     aaa
   }
  }
}
/*
fragments  vue3 中可以使用   表示可以拥有多个跟 节点, 而在vue2.X中只能有1个跟节点
直接用就是可以了

Emits 选项 
我自己定义的事件, 最好在emits:['事件名']  进行绑定



*/ 
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
