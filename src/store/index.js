import { createStore } from "vuex";

const store = createStore({
    state:{
        nickname:'yunmu'
    },
    getters:{

    },
    mutations:{
        changeNickname(state,payload){
            state.nickname +=payload
        }
    },
    actions:{

    },
    modules:{

    }
})
export default store