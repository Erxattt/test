<script lang="ts" setup>
import style from "@/styles/variables.module.scss"
import SvgIcon from "@/components/SvgIcon/index.vue";
import {computed, ref, watch} from "vue";
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
import {useAppStore} from "@/stores/app";
const {app_name}= useAppStore()
const MenuBg = computed(()=> style.menuBg)
const menuActiveText = computed(()=>style.menuActiveText)
const  menuText = computed(()=>style.menuText)

defineProps({
  isCollapse:{
    default:false,
  }
})
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
<template>
  <el-menu
      :active-text-color="menuActiveText"
      :background-color="MenuBg"
      class="menu"
      default-active="2"
      :collapse="isCollapse"
      :text-color="menuText"
      @open="handleOpen"
      @close="handleClose"

  >
    <div class="brand">
      <div class="logo">
       <SvgIcon name="logo"/>
      </div>
      <div v-show="!isCollapse" class="app_name">
        {{app_name}}
      </div>

    </div>
    <el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>首页</span>
      </template>
      <el-menu-item-group title="Group One">
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="1-4">
        <template #title>item four</template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="2">
      <el-icon><icon-menu /></el-icon>
      <span>Navigator Two</span>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <el-icon><document /></el-icon>
      <span>Navigator Three</span>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><setting /></el-icon>
      <span>Navigator Four</span>
    </el-menu-item>
  </el-menu>
</template>

<style lang="scss" scoped>
@import "@/styles/variables.module";
  .brand{
    text-align: center;
    width: 100%;
    height: 50px;
    line-height: 50px;
    color: #ffffff;
    font-weight: bolder;
  }
 .menu{
   //width: 200px;
   height: 100%;

   .brand{
     padding: 0 10px 0 10px;
     display: flex;
     flex-direction: row;
     justify-content: space-around;
     .logo{
       padding-top: 3px;
     }
   }
 }

</style>
