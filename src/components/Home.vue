<template xmlns="">
  <el-container>
    <el-header>
      <div class="top_bar">
        <div class="logo">
          <img src='../assets/logo.png' alt="">
          <span class="Wuster_name">Wuster</span>
        </div>
        <div class="nav">
          <ul class="nav_bar">
            <li><router-link to="/kexie">首页</router-link></li>
            <li><router-link  to="/kexie">科协</router-link></li>
            <li><a href="#">其他</a></li>
          </ul>
        </div>
        <div class="other_download">
          <a href="">
            <span>
            <img src='../assets/download.svg' alt="">
          </span>
          </a>
          <a href="">
            <span>
            <img src='../assets/loginin.svg' alt="">
          </span></a>
        </div>
      </div>
    </el-header>
    <el-main>
      <div class="swiper_container">
        <el-carousel  height="600px" type="card" indicator-position="none">
          <el-carousel-item>
            <img src='../assets/swiper1.jpg' alt="">
          </el-carousel-item>
          <el-carousel-item>
            <img src='../assets/swiper2.jpg' alt="">
          </el-carousel-item>
          <el-carousel-item>
          <img src='../assets/swiper3.jpg' alt="">
        </el-carousel-item>
          <el-carousel-item>
          <img src='../assets/swiper4.jpg' alt="">
        </el-carousel-item>
        </el-carousel>
      </div>
    </el-main>
  </el-container>

</template>



<script setup>
import {useRoute} from "vue-router";
const route = useRoute()
</script>
<style lang="less">

.el-container{
   width: 100%;
  .swiper_container {
    width: 50%;
    margin: 100px auto;
    //display: flex;
   .el-carousel{

     img{
       width: 100%;
       height: 100%;
     }
   }

 }
  .el-header{
    position: relative;
    top: 0;
    height: 80px!important;
    padding: 0!important;
    .top_bar{
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: space-between;
      background: url("../assets/navigation-background.svg") no-repeat;
      //height: 80px;
      .logo{
        padding-left: 15px;
        line-height: 80px;
        width: 200px;
        flex: 1;
        img{
          vertical-align: middle;
          width: 70px;
          height: 65px;
        }
        .Wuster_name{
          display: inline-block;
          height: 65px;
          font-size: 30px;
          margin-top: 5px;
          margin-left: 8px;
          line-height: 65px;
          color: #fff;
        }

      }
      .nav{
        flex: 1;
        .nav_bar{
          display: flex;
          list-style: none;
          //padding:0 90px;
          line-height:80px ;
          text-align: center;
          justify-content: space-between;
          margin: 0;
          li{
            width: 120px;
            a{
              width: 100%;
              height: 100%;
              font-size: 25px;
              color: #fff;
              padding: 10px;
              text-decoration: none;
            }

          }
        }
      }
      .other_download{
        flex: 1;
        display: flex;
        justify-content: flex-end;
        margin-right: 10px;
        img {
          width: 48px;
          height: 48px;
          margin-left: 40px;;
          margin-top: 15px;
        }
      }
    }
  }
}
</style>