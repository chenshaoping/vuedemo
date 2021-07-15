<template>
        <div class="user-info" v-show="show">
            <div class="user-img">
                <img  src='../assets/imgs/sharp.jpg'>
            </div>
            <div class="user-msg">
                <div class="user-msg-row user-name">
                    <span>chenshaoping</span>
                </div>
                <div class="user-msg-row">
                    <span>簽名：</span>我們生在紅旗下，長在春風裏，人民有信仰，國家有力量，民族有希望，目光所至皆為華夏，五星閃耀皆爲信仰。
                </div>
            </div>
        </div>
</template>

<script>

    export default {
        name:'UserInfo',
        props:{
            show:{
                type:Boolean,
                default:false
            }
        },
        data(){
            return {
                
            }
        }
    }
</script>
<style scoped>
    .slide-fade-enter-active {
        transition: all .1s linear;
    }
    .slide-fade-leave-active {
        transition: all .1s linear;
    }
    .slide-fade-enter-from,
    .slide-fade-leave-to
    {
        height: 0px;
    }
    .slide-fade-leave-from ,
    .slide-fade-enter-to{
        height: 350px;
    }
    .user-info{
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .user-img{
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .user-img img{
        width: 80px;
        height: 80px;
        border-radius: 40px;
    }
    .user-msg{
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .user-msg-row{
        /* width: 100%; */
        padding: 5px;
    }
    .user-name{
        text-align: center;
    }

</style>

