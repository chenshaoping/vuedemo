import {createStore} from 'vuex'
import axios from 'axios';

const store = createStore({
    state(){
        return {
            count:0,
            productList:[]
        }
    },
    mutations:{
        increment(state){
            state.count++
        },
        setProducts(state, products){
            state.productList = products;
        }
    },
    actions:{
        getProducts({commit}){
            axios.post('http://10.33.9.64:8000/vue/getProductList',{
            "prodDesc":"手机"
            }).then(res=>{
                console.log("res",res)
                let pros = res.data.data;
                console.log("pros",pros)
                commit('setProducts',pros)
            })
        }
    }
})

export default store
