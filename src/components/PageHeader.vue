<template>
    <div class="page-header header-bg">
        <div class="p-menu" @click="toggleOpen">
            <i class="fa fa-navicon fa-2x"></i>
        </div>
        <div class="header-content">
            <slot></slot>
        </div>
        <div class="persion" @click="showUserInfo($event)">
            <i class="fa fa-user-circle fa-2x"></i>
        </div>
        <transition name="slide-fade" >
            <div class="user-info-view" v-show="showUser" >
                <UserInfo :show="showUser"></UserInfo>
            </div>
        </transition>
    </div>
</template>

<script>
    import UserInfo from './UserInfo.vue';
    export default {
        name:'PageHeader',
        components:{
            UserInfo
        },
        props:{},
        data(){
            return{
                open:true,
                showUser:false
            }
        },
        mounted(){
            document.addEventListener('click',()=>{
                if(this.showUser){
                    this.showUser = false;
                }
            })
        },
        methods: {
            toggleOpen(){
                this.open = !this.open;
                this.$emit('toggleOpen',this.open)
            },
            showUserInfo(e){
                console.log("showUserInfo",e);
                this.showUser = !this.showUser;
                e.stopPropagation();
                e.preventDefault();
            },
        },
    }
</script>

<style scoped>
    @import '../assets/css/fontawesome/font-awesome.css';
    .page-header{
        width: 100%;
        height: 50px;
        display: flex;
        flex-direction: row;
        flex-direction: row;
        justify-content: space-between;
    }
    .header-bg{
        background-color: #b2def3;
    }
    .p-menu{
        padding:0px 5px 0px 5px ;
        width: 30px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    .header-content{
        height: 50px;
        width: calc(100% - 80px);
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .persion{
        width: 50px;
        height: 50px;
        right: 0px;
        position: relative;
        float: right;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    .user-info-view{
        z-index: 99;
        position: absolute;
        right: 1px;
        width: 300px;
        height: 350px;
        top: 50px;
        border: 1px #c3c6ca solid;
        border-radius: 5px;
        background-color: #a4c8ef8a;
        transition: height .5s;
        outline: 0;
    }
    .user-info-view:before{
        content: "";
        width: 0;
        height: 0;
        right: 0px;
        top: -15px;
        position: absolute;
        border-top: 0px solid transparent;
        border-right: 25px solid transparent;
        border-bottom: 15px solid #2f6eb38a;
        border-left: 270px solid transparent;
    }

    .slide-fade-enter-active {
        transition: all .5s linear;
    }
    .slide-fade-leave-active {
        transition: all .5s linear;
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
</style>