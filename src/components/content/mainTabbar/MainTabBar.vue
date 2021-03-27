<template>
  <tab-bar>
      <tab-bar-item path='/home' activeColor="red">
        <div slot="item-icon" class="iconfont icon-tabbarhome"></div>
        <div slot="item-icon-active" style="color: red" class="iconfont icon-tabbarhome"></div>
        <!-- <img slot="item-icon-active" class="iconfont" src="./assets/img/tabbar/tabbarhome.svg" alt=""> -->
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path='/category' activeColor="red">
        <div slot="item-icon" class="iconfont icon-tabbar-icon-chanpin-default"></div>
        <div slot="item-icon-active" style="color: red" class="iconfont icon-tabbar-icon-chanpin-default"></div>
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path='/cart' activeColor="red">
        <div slot="item-icon" class="iconfont icon-TABbar"></div>
        <div slot="item-icon-active" style="color: red" class="iconfont icon-TABbar"></div>
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path='/profile' activeColor="red">
        <div slot="item-icon" class="iconfont icon-TABbar1"></div>
        <div slot="item-icon-active" style="color: red" class="iconfont icon-TABbar1"></div>
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem"

export default {
  components: {
    TabBar,
    TabBarItem,
  },
}
</script>

<style>

</style>