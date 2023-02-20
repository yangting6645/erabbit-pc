<template>
  <div class="container">
    <!-- 首页入口（分类和广告） -->
    <div class="honme-entry">
      <!-- 左侧分类 -->
      <HomeCategory />
      <!-- 轮播图 -->
    </div>
  </div>
</template>

<script>
import HomeCategory from './components/home-category'
export default {
  name: 'HomePage',
  components: {
    HomeCategory
  }
}
</script>

<style scoped lang=" less" ></style>
