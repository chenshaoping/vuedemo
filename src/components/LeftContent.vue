<template>
    <transition name="slide-fade">
        <div class="left-contnet-temp" v-if="open">
            <DxTreeView
                :items="menuData"
                displayExpr="name"
                dataStructure="plain"
                parentIdExpr="categoryId"
                keyExpr="ID"
                width="100%"
                @item-click="selectItem"
                @contentReady="treeReady"
            ></DxTreeView>
        </div>
    </transition>
</template>

<script>
import DxTreeView from 'devextreme-vue/tree-view';
import axios from 'axios';
export default {
    name:'LeftContent',
    components:{
        DxTreeView
    },
    props:{
        open:{
            type:Boolean,
            default:true
        },
    },
    data(){
        return {
            menuData : [],
            currItem:null,
            currItemEle:null
        }
    },
    mounted(){
        axios.post('http://10.33.9.64:8000/vue/getTreesPost',{
            "ptyid":"123456",
            "unitid":"234354"
        }).then(res=>{
            console.log("res",res)
            this.menuData = res.data.data;
            this.currItem = this.menuData[0];
        })
    },
    methods:{
        selectItem(e){
            console.log("select item ",e);
            if(this.currItem){
                let t = e.component.instance();
                t.unselectItem(this.currItem.ID);
            }
            if(this.currItemEle){
                //空的区域都不允许？
                console.log("this.currItemEle",this.currItemEle);
               this.currItemEle.classList.remove('item-backgroud-color')
               
            }
            e.itemElement.classList.add('item-backgroud-color')
           
            this.currItem = e.itemData;
         
           
            this.currItemEle =  e.itemElement;
            
        },
        treeReady(e){
             console.log("treeReady item ",e,this.currItem);
        }
    }
    
}
</script>

<style >
    .left-contnet-temp{
        width:15%;
        height:100%;
        border-right: 1px #cccfd0 solid;
    }
    .left-content{
        width:100%;
        height: 100%;
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
        width: 0%;
    }
    .slide-fade-leave-from ,
    .slide-fade-enter-to{
        width: 15%;
    }
    .item-backgroud-color{
        background-color: #d3d3d3  !important;
    }

</style>