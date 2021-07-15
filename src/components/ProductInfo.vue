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
</style>