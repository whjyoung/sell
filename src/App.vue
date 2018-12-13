<template>
  <div id="app">
    <!-- <span class="iconfont icon-home"></span> -->
    <!-- 默认根组件 / -->
    <router-view/>
    <!-- 底部导航栏 -->
    <FooterGuide></FooterGuide>
  </div>
</template>

<script>
import './common/iconfont/iconfont.css'//引入字体图标
import FooterGuide from './components/FooterGuide/FooterGuide'//引入底部导航组件
export default {
  name: 'App',
  components:{
    FooterGuide
  }
}
</script>
<style lang="stylus" scoped>
  #app
    width:100%
    height :100%
</style>

