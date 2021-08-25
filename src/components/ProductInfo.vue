<template>
    <div class="product-info">
        <div class="product-info-show">
            <div class="product-img-view">
                <div class="product-img-view-box">
                    <div class="product-img-box">
                        <div class="product-img">
                            <img src="../assets/imgs/huawei.jpg" />
                        </div>
                        <div class="img-sel"></div>
                    </div>
                    <div class="product-desc">
                        <div class="product-desc-text">
                            <span>rfid手机OTG读卡器USB通讯UHF超高频便携手持小精灵Type-c读写器</span>
                        </div>
                        <div class="product-price">
                            <div class="product-price-label">价格</div>
                            <div  class="product-price-amt">￥799.00 - 817.00</div>
                            <div class="product-price-comment">
                                <div>23</div>
                                <div>累计评论</div>
                            </div>
                            <div class="product-price-dill">
                                <div>-</div>
                                <div>交易成功</div>
                            </div>
                        </div>
                        <div class="product-color">
                            <div class="product-color-label">颜色分类</div>
                            <div class="product-color-list">
                                <div class="product-color-img">
                                    <img src='../assets/imgs/huawei.jpg'  />
                                </div>
                                <div class="product-color-img">
                                    <img src='../assets/imgs/huawei.jpg'  />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="similar-product">
                <div class="similar-product-box">
                    <div class="similar-item">
                        <img src="../assets/imgs/huawei.jpg" />
                    </div>
                    <div class="similar-item">
                        <img src="../assets/imgs/apple.jpg" />
                    </div>
                    <div class="similar-item">
                        <img src="../assets/imgs/xiaomi.jpg" />
                    </div>
                </div>
            </div>
        </div>
        <div class="product-info-detail"></div>
    </div>
</template>

<script >
    export default {
        name:'ProductInfo',
    }
</script>

<style scoped>
.product-info{
    width: 100%;
    /* display: flex; */
    /* flex-direction: column; */
    min-width: 1020px;
}
.product-info-show{
    width: 100%;
}
.product-info-detail{
    width: 100%;
}
.product-img-view{
    float: left;
    width: 100%;
}
.product-img-view-box{
    margin-right: 200px;
    border-right: 1px solid #E8E8E8;
}
.product-img-view-box:after {
    content: '\20';
    display: block;
    height: 0;
    clear: both;
}
.product-img-box{
    float: left;
    width: 50%;
    max-width: 400px;
}

.product-desc{
    float: left;
    width: 50%;
    min-width: 400px;
}
.similar-product{
    float: left;
    width: 200px;
    margin-left: -200px;
}
.similar-product-box{
    margin: 8px;
    text-align: center;
}
.similar-item{
    width:140px;
    height: 140px;
    margin: 0px auto;
}
.similar-item img{
    height: 100%;
    width: 100%;
}
.product-price{
    width:100%;
    background-color: rgb(245, 225, 218);
    padding: 5px;
}
.product-desc-text{
    font-size: 15px;
    font-weight:bold;
}
.product-price > div{
   display: inline-block;
   height:45px;
}

.product-price-label{
    height: 30px !important;
    width:50px;
    vertical-align: middle;
    /* padding-top: 5px; */
    color: gray;
}
.product-price-amt{
    width:230px;
    color: orangered;
    font-size: 25px;
    font-weight: bold;
    line-height: 45px;
}
.product-price-comment{
    width:80px;
    text-align: center;
     color: gray;
}
.product-price-dill{
    width:80px;
    text-align: center;
     color: gray;
}
@media screen and (max-width:1291px){
    .product-price-comment{
        display: none !important;
    }
    .product-price-dill{
        display: none !important;
    }
}
.product-color{
    padding: 10px 5px 5px 5px;
}
.product-color-label{
    width:60px;
    height:45px;
    color: gray;
    display: inline-block;
    vertical-align: top;
}
.product-color-list{
    max-width: 300px;
    display: inline-flex;
}
.product-color-img{
    width:45px;
    height:45px;
    text-align: center;
    vertical-align: center;
    border:2px #eeeeee solid;
    padding : 2px;
}
.product-color-img:hover{
    border:2px #F40 solid;
}
.product-color-img > img{
    width: 98%;
    height:98%;
    border:2px solid transparent;
}
</style>