<template>
    <div class="home">
        <PageHeader @toggle-open="toggleOpen">
            <span>这是头部</span>
            <span>这是头部二</span>
        </PageHeader>
        <div class="home-content">
            <LeftContent :open="leftOpen"></LeftContent>
            <RightContent :open="leftOpen"></RightContent>
        </div>
    </div>
</template>

<script>
    import PageHeader from './PageHeader.vue';
    import LeftContent from './LeftContent.vue';
    import RightContent from './RightContent.vue';
    export default {
        name:'Home',
        components:{
            PageHeader,
            LeftContent,
            RightContent,
        },
        props:{

        },
        data() {
            return {
                leftOpen:true
            }
        },
        methods: {
            toggleOpen(e){
                console.log("open",e);
                this.leftOpen = e;
            }
        },
    }
</script>
<style scoped>
    .home{
        width:100%;
        height:100%;
        position:absolute;
    }
    .home-content{
        width:100%;
        height: calc(100% - 50px);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
</style>