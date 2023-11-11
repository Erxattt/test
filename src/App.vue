<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
})

</script>

<template>
  <el-config-provider namespace="ep">
    <RouterView />
  </el-config-provider>
</template>

