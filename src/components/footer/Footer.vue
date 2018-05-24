<!---->
<template>
  <transition name="slide-fade">
    <div class="footer-wrap wx-1px-t" v-if="showFooter">
      <ul class="footer">
        <li class="footer-item" v-for="item in lists" @click="footerItemEvent(item)" :class="{'select': $route.name === item.name}">
          <md-icon :name="item.icon" size="lg" :color="$route.name === item.name?'#3ec29c':'#333'"></md-icon>
          <p class="title">{{ item.title }}</p>
        </li>
      </ul>
    </div>
  </transition>
</template>

<script>
  export default {
    name: "Footer",
    data(){
      return {
        lists: [{
          name: 'home',
          title: '首页',
          icon: 'icon-home'
        },{
          name: 'mine',
          title: '个人中心',
          imgUrl: '',
          icon: 'icon-me'
        }],
        showFooter: true
      }
    },
    watch: {
      '$route'(to, from){
        let show = false;
        this.lists.map(function (item) {
          if (item.name === to.name){
            show = true;
          }
        })
        this.showFooter = show;
      }
    },
    methods: {
      footerItemEvent(item){
        this.$router.push({
          name: item.name
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../common/css/common";

  .footer-wrap{
    width: 100%;
    height: 120px;
    background-color: white;
    .footer{
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 100%;
      .footer-item{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        &.select .title{
          color: $MainColor;
          transition: all .5s ease;
        }
        &.select .icon{
          color: $MainColor;
          transition: all .5s ease;
        }
        .icon{
          color: #333;
        }
        .title{
          color: #333;
          font-size: 13px;
        }
      }
    }
  }

  /* 可以设置不同的进入和离开动画 */
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateY(120px);
    opacity: 0.2;
    height: 0;
    transition: all .2s ease;
  }

</style>
