<template>
    <div class="right-content" :style="{width:open?'85%':'100%'}">
        <p>
            this is test english ,show right content
        </p>
        <DxButton
            text="Click me"
            type="success"
        ></DxButton>
    </div>
</template>

<script>
import DxButton from 'devextreme-vue/button';
export default {
    name:'RightContent',
    components:{
        DxButton
    },
    props:{
        open:{
            type:Boolean,
            default:false
        },
    },
    data() {
            return {
                
            }
    },
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