<template>
    <div class="right-content" :style="{width:open?'85%':'100%'}">
        <!-- <p>
            this is test english ,show right content
            {{count}}
        </p>
        <DxButton
            text="Click me"
            type="success"
            @click="clickBtn"
        ></DxButton> -->
        <ProductViewList></ProductViewList>
        <ProductInfo />
    </div>
</template>

<script>
// import DxButton from 'devextreme-vue/button';
import ProductViewList from './ProductViewList.vue';
import ProductInfo from './ProductInfo.vue';
export default {
    name:'RightContent',
    components:{
        // DxButton,
        ProductViewList,
        ProductInfo
    },
    props:{
        open:{
            type:Boolean,
            default:false
        },
    },
    computed:{
         count () {
            return this.$store.state.count
        }
    },
    data() {
            return {
                
            }
    },
    methods:{
        clickBtn(e){
            console.log("eeeeee",e);
            this.$store.commit('increment')
        }
    }
}
</script>

<style scoped>
    .right-content{
        width:85%;
        height:100%;
        transition: width .5s ease;
    }
    .slide-fade-enter-active {
        transition: width .5s ease;
    }
    .slide-fade-leave-active {
        transition: width .5s ease;
    }
    .slide-fade-enter-from,
    .slide-fade-leave-to
    {
        width: 85%;
    }
    .slide-fade-leave-from ,
    .slide-fade-enter-to{
        width: 100%;
    }
</style>