<script lang="ts" setup>
import { useUserStore } from '@/stores/user'
import { RemoveToken } from '@/utils/storage'
import { ArrowDown } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
const router = useRouter()
// const store = useUserStore()
const logout = () => {
  RemoveToken()
  router.replace({
    path: '/login'
  })
}
</script>
<template>
  <el-dropdown trigger="hover">
    <span class="el-dropdown-link">
      admin
      <!--      <el-icon class="el-icon&#45;&#45;right">-->
      <!--        <arrow-down />-->
      <!--      </el-icon>-->
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style scoped>
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>
