<template>
    <div class="page-header header-bg">
        <div class="p-menu" @click="toggleOpen">
            <i class="fa fa-navicon fa-2x"></i>
        </div>
        <div class="header-content">
            <slot></slot>
        </div>
        <div class="persion">
            <i class="fa fa-user-circle fa-2x"></i>
        </div>
    </div>
</template>

<script>
    export default {
        name:'PageHeader',
        props:{},
        data(){
            return{
                open:true
            }
        },
        methods: {
            toggleOpen(){
                this.open = !this.open;
                this.$emit('toggleOpen',this.open)
            }
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
</style>