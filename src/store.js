import {createStore} from 'vuex'
//import axios from 'axios';
import huawei from './assets/imgs/huawei.jpg'

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
            setTimeout(()=>{
                let pros = [
                    {
                        id:"1234",
                        imgUrl:huawei,
                        name:"华为P30",
                        character:['双卡双待','超级快充','全网通'],
                        phoneMemory:[
                            {
                                name:"4GB运存",
                                desc:"运行内存",
                            },
                            {
                                name:"64GB",
                                desc:"机身存储",
                            },
                            {
                                name:"6.0英寸",
                                desc:"主屏幕尺寸",
                            }
                        ],
                        price:2899,
                        tab:[
                            {type:'01',name:'自营'},
                            {type:'02',name:'新品'}
                        ],
                        discuss:'5W+',
                        goodDiscuss:"90%",
                        shop:"京东华为旗舰店"
                    }
                ]
                commit('setProducts',pros)
            },100)
            // axios.post('http://10.33.9.64:8000/vue/getProductList',{
            // "prodDesc":"手机"
            // }).then(res=>{
            //     console.log("res",res)
            //     let pros = res.data.data;
            //     console.log("pros",pros)
            //     commit('setProducts',pros)
            // }).catch(err=>{
            //     console.log("getProductList err",err)
                
            // })
        }
    }
})

export default store
