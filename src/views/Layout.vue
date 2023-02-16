<template>
  <!-- 顶部通栏 -->
  <nav></nav>
  <!-- 头部组件 -->
  <header></header>
  <!-- 内容容器 -->
  <div class="main">
    <!-- 二级路由 -->
    <RouterView />
  </div>
  <!-- 底部组件 -->
  <footer></footer>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Layout'
}
</script>
<style scoped lang="less"></style>
