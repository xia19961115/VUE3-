<template>
  <div class="hello">
    <input type="text" v-model="text">
    <ul>
      {{list}}
      <li v-for='(item,index) in list' :key="index">{{item}}</li>
    </ul>
    <button @click="handle">点击</button>
    <!-- {{text}} -->
    <!-- 点击触发change函数 -->
     <p @click="change">{{props.num}}</p>
  </div>
</template>

<script>
import { reactive, toRefs,watch,} from 'vue'
export default {
  name: 'HelloWorld',
  props:['num'],
  setup(props,{emit}){
    const data = reactive({
      text:'',
      list:[],
      handle(){
        console.log(this.list);
        this.list.push(this.text)
        // console.log(props.num);
      },
      // 子组件往父组件传值
      change(){
        // emit 自己定义 一个事件(父组件来接受)  第二个参数 是传递的参数
        emit('changeNum',2)
      }
    })
    // 注意reactive  用 ()=>{return}
    //  ref  可以直接用
    // watch监听是惰性的 数据改变了才会执行
    watch(()=>data.list,(n)=>{
      console.log("执行了么?");
      console.log(n);
    },{
      deep:true
    })
  // watchEffect(()=>{} ) 只用传入一个函数(进入这个组件 就会立马执行)
  // 只能获取新的值, 没法获取老的值(注意!!!!!!!!)
  // 立即执行   等于vue2.X 中的 immediate:true
  // 特性  不需要传递你需要监听的内容
  /*
    停止监听
    const stop =watchEffect(()=>{
      console.log('需要监听的数据')
      // 一秒后停止监听  (watch 也是一样 调用停止监听)
      setTimeout(()=>{
        stop()
      },1000)
      
    } )
  
  */
  /*
  生命周期函数
  在2.X中的语法是  mounted(){ 需要调用的函数}
  在setup中如何使用
  引入 import { onBeforeMount ,....} from 'vue'
      // 
      // beforeMount ===> onBeforeMount
      // mounted ===> onMounted
      // beforeUpdate ===> onBeforeUpdate
      // updated ===> onUpdated
      // 销毁之前
      // beforeUnmount ===> onBeforeUnmount
      // 销毁
      // unmounted ==> onUnmounted
      // 
      新增加2个生命周期函数onRenderTriggered onRenderTracked
      onRenderTriggered 表示 每次触发页面重新渲染的时候 自动执行
      onRenderTracked  表示 每次渲染后重新收集响应式依赖 (相当于 页面刷新就会调用)

      直接使用 (用回调函数)
      如
      onMounted(()=>{
        需要调用的函数
      })
  */ 





  

    return{
      ...toRefs(data),
      props
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
