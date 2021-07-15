<template>
    <div class="product-view-list">
        <div class="product-title">手機列表</div>
        <div class="product-item" v-for="prod in productList" :key="prod.id">
            <div class="prod-img">
                <img :src="prod.imgUrl">
            </div>
             <div class="prod-msg">
                 <div>{{prod.name}}</div>
                 <div class="msg-tap1">
                     <span v-for="(char,index) in prod.character" :key="char">{{char}}<span v-if="(index+1)<prod.character.length"> | </span></span> 
                 </div>
                 <div class="msg-tap2">
                     <div class="tap-row">
                         <template v-for="(men,index) in prod.phoneMemory" :key="index">
                             <div>
                                <span>{{men.name}}</span><br>
                                <span style="color:gray">{{men.desc}}</span>
                            </div>
                            <div class="tap2-gap" v-if="index+1<prod.phoneMemory.length">|</div>
                         </template>
                         
                     </div>
                 </div>
                 <div class="prod-price">
                     <div>￥{{prod.price}}</div>
                     <template v-for="(tab,index) in prod.tab" :key="index">
                        <div class="prod-title" :class="{'price-self':(tab.type =='01'),'new-prod':(tab.type =='02')}">{{tab.name}}</div>
                     </template>
                 </div>
                 <div class="prod-discuss">
                     {{prod.discuss}}条评论 {{prod.goodDiscuss}}好评
                 </div>
                 <div class="prod-shop">
                    {{prod.shop}} <span class="goto-shop">进店></span>
                 </div>
             </div>
        </div>
    </div>
</template>
<script >
    export default {
        name:'ProductViewList',
        created(){
            this.$store.dispatch('getProducts')
        },
        computed:{
            productList(){
                return this.$store.state.productList
            }
        },
        data(){
            return {
               
            }
        }
    }
</script>
<style scoped>
    .product-view-list{
        padding: 5px;
    }
    .product-title{
        padding: 5px;
        font-size: 20px;
    }
    .product-item{
        display: flex;
        flex-direction: row;
        border: 1px rgb(155, 158, 163) solid;
        /* height:100px; */
        margin-bottom: 5px;
        padding: 5px;
        border-radius: 5px;
       
    }
    .prod-img{
        width: 100px;
        /* height: 100px; */
        display: flex;
        flex-direction: column;
        cursor: pointer;
        border-right: 1px dotted rgb(155, 158, 163);
        justify-content:center;
    }
    
    .prod-img img{
        width: 100px;
        height: 100px;
    }

    .prod-msg{
       padding-left: 5px;
       user-select: none;
    }

    .msg-tap1{
        margin-left: -5px;
        font-size: 7px;
        color: gray;
        transform: scale(0.9);
    }
    .msg-tap2{
        font-size: 7px;
        transform: scale(0.9);
    }
    .tap-row{
        display: flex;
        flex-direction: row;
        align-content: center;
        vertical-align: middle;
    }
    .tap2-gap{
        display: flex;
        align-items: center;
        padding-left: 5px;
        padding-right: 5px;
    }
    .prod-price{
        color: red;
    }
    .prod-title{
        display: inline-flex;
        font-size: 7px;
        transform: scale(0.9);
        margin-top: -5px;
    }
    .price-self{
        background-color:red;
        color: #fff;
        border-radius: 3px ;
        padding-left: 2px;
        padding-right: 2px;
    }
    .new-prod{
        border:1px green solid;
        border-radius: 3px;
        padding-left: 2px;
        padding-right: 2px;
        color: green;
    }
    .prod-discuss{
        font-size: 7px;
        transform: scale(0.9);
        color: gray;
        margin-left: -7px;
    }
    .prod-shop{
        font-size: 7px;
        transform: scale(0.9);
        color: gray;
        margin-left: -7px;
    }
    .goto-shop{
        color:black;
        cursor: pointer;
    }
</style>
