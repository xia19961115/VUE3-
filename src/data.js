import {computed, onMounted, reactive,} from 'vue'
function Data (){
    const data =reactive({
        count:1,
        addCount:computed(()=>data.count+1)
      })
     // 生命周期函数 
     // onMounted === 2.X中的 Mounted
     let timer
      onMounted(()=>{       
    
        timer=setInterval(()=>{
           data.count++
               if(data.count===10){
             clearInterval(timer)
             return
           }
        },1000)
      })
      return data
}
export default Data