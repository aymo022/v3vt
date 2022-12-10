<template>
  <el-header class="header">
    <img class="avatar" src="@/assets/images/avatar.jpg" />
    <el-menu
      :default-active="state.activeIndex"
      mode="horizontal"
      :ellipsis="false"
      @select="menuClick"
    >
      <div class="flexGrow" />
      <el-menu-item
        v-for="item in state.menuList"
        :key="item.name"
        :index="item.path"
      >
        <span>{{ item.label }}</span>
      </el-menu-item>
    </el-menu>
  </el-header>
</template>

<script setup>
import { onMounted, reactive, watch } from 'vue';
import { useRouter } from 'vue-router';
defineOptions({
  name: 'Header',
});

const router = useRouter();
const state = reactive({
  activeIndex: '',
  menuList: [],
});

onMounted(() => {
  getMenuList();
  setActiveIndex();
});

// 获取菜单
const getMenuList = () => {
  state.menuList = [{ path: '/goods', label: '首页', name: 'goods' }];
};
// 设置当前激活菜单
const setActiveIndex = () => {
  const currPath = router.currentRoute.value.path;
  state.activeIndex = currPath;
};
// 菜单点击
const menuClick = val => {
  if (val !== 'logo') {
    router.push(val);
  }
};

watch(
  () => router.currentRoute.value,
  val => {
    setActiveIndex();
  },
  { immediate: true }
);
</script>

<style lang="less" scoped>
.header {
  border-bottom: 1px solid #e9ecf3;
  background-color: #fff;
  box-shadow: 0 0 0.6rem 0 #d0d0d0;
  display: flex;
  align-items: center;
  .avatar {
    width: 40px;
    height: 40px;
  }
  :deep(.el-menu) {
    flex: 1;
    .flexGrow {
      flex-grow: 1;
    }
    height: 100%;
  }
}
</style>
