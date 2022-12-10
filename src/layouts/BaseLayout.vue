<template>
  <div class="baseLayout">
    <el-container>
      <Header />
      <el-main>
        <router-view class="rv" />
      </el-main>
      <Footer />
    </el-container>
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

defineOptions({
  name: 'BaseLayout',
});
</script>

<style lang="less" scoped>
.baseLayout {
  width: 100%;
  height: 100%;
  :deep(.el-container) {
    width: 100%;
    height: 100%;
    flex-direction: column;
    .el-header {
      padding: 0 10%;
    }
    .el-main {
      padding: 0;
      .rv {
        padding: 20px 10%;
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
