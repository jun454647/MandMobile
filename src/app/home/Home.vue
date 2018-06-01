<!--首页-->
<template>
  <div class="container-wrap">
    <div class="content">Home</div>
    <div class="test">“听说了吗？听说了吗？我们的苏队长被革职了！”警队里的大嘴巴小李在办公室幸灾乐祸的问着。看到大家抬头看着自己，小李继续说到:“要我说，苏队被革职挺好，我们终于不用在他手下受气了，你们说是不是？”</div>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data(){
      return {
        text: 'Hellow word',
        size: 80,
        src: require('../../assets/logo.png'),
        src2: require('../../assets/logo.png')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .content{
    width: 100%;
    margin-bottom: 20px;
    background-color: red;
  }
  .test{
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

</style>
