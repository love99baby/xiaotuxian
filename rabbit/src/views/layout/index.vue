<script setup>
import { onMounted } from 'vue'
import { useCategoryStore } from '@/stores/categoryStore';
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutNaver from './components/LayoutNav.vue';
import LayoutFixed from './components/LayoutFixed.vue';

const categoryStore = useCategoryStore()

// 获取导航分类数据
onMounted(() => {
  categoryStore.getCategory()
})
</script>
<template>
  <LayoutFixed />
  <LayoutNaver />
  <LayoutHeader />
  <RouterView />
  <LayoutFooter />
</template>