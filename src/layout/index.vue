<script setup lang="ts">
import Menu from "./menu/index.vue"
import {useMenuStore} from "@/stores/menu";
import userinfo from "./userInfo/index.vue"
import {ref} from "vue";
const store = useMenuStore();
const isCollapse =ref(false)
const handleCollapse = () => isCollapse.value = !isCollapse.value

</script>
<template>
  <div class="common-layout">
    <el-container>
      <el-container>
        <el-aside class="aside" style="width: max-content;">
           <Menu :is-collapse="isCollapse"/>
        </el-aside>
        <el-container>
          <el-header class="header">
            <div class="header_inner_1">
              <div class="folder_icon" @click="handleCollapse">
                <el-icon v-show="!isCollapse" size="26"><Fold /></el-icon>
                <el-icon v-show="isCollapse" size="26"><Expand /></el-icon>
              </div>
              <div class="userinfo">
                 <userinfo/>
              </div>
            </div>
            <div class="header_inner_2"></div>
          </el-header>
          <el-main class="main">Main</el-main>
          <el-footer class="footer">Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<style scoped lang="scss">
@import '@/styles/variables.module';
.common-layout{
  display: flex;
  width: 100%;
  height: 100%;
  .header{
    padding: 0;
    height: max-content;
    //padding: 0 10px 0 10px;
    background-color: $headerBg;
    //height: 100%;
    flex-direction: column;
    .header_inner_1{
      display: flex;
      padding-left: 10px;
      padding-right: 50px;
      height: 40px;
      line-height: 40px;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #f1f5f1;
      .folder_icon {
        display: flex;
        align-items: center;
      }
      .userinfo{
        display: flex;
        align-items: center;
      }
    }
    .header_inner_2{
      height: 30px;
    }

  }
  .footer{
    text-align: center;
    background-color: $headerBg;
  }

}
</style>
