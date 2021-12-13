import { createApp } from 'vue'
import App from './App.vue'
import GlobalText from '../src/components/GlobalText.vue'
import GlobalBlock from '../src/components/GlobalBlock.vue'
import router from '../src/router/index.js'
import store from '../src/store/index.js'



const app =createApp(App)
app.use(router)
app.use(store)
app.component('GlobalText',GlobalText)
app.component('GlobalBlock',GlobalBlock)
app.mount('#app')
