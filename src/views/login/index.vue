<script setup lang="ts">
import { onMounted, reactive, toRefs } from 'vue'
import type { loginForm } from '@/types/user'
import { useUserStore } from '@/stores/user'
import type { FormInstance, FormRules } from 'element-plus'
import { User, Lock, CircleCheck } from '@element-plus/icons-vue'
// @ts-ignore
import identify from '@/components/identify/index.vue'
import randCode from '@/hooks/useRandomCode'
import { useRouter } from 'vue-router'
const router = useRouter()
const { identifyCode, refreshCode } = randCode()

const state = reactive({
  _loginFormRef: null as FormInstance,
  _loginForm: {
    username: 'admin',
    password: '123456',
    code: identifyCode
  } as loginForm,
  placeholder: {
    username: '请输入账号',
    password: '请输入密码',
    code: '请输入验证码'
  },
  rules: {
    username: [
      { required: true, message: '用户名不能为空', trigger: 'blur' },
      { min: 3, max: 8, message: '用户名长度大于3位小于8位', trigger: 'blur' }
    ],
    password: [
      { required: true, message: '密码不能为空', trigger: 'blur' },
      { min: 6, message: '密码长度不能低于6位', trigger: 'blur' }
    ],
    code: [
      { required: true, message: '验证码不能为空', trigger: 'blur' },
      {
        validator: (rule, value, callback) => {
          if (value !== identifyCode.value) {
            callback(new Error('验证码错误'))
          } else {
            callback()
          }
        }
      }
    ]
  } as FormRules<loginForm>,
  redirect: '',
  loading: false
})
const { _loginFormRef, _loginForm, rules, placeholder, loading } = toRefs(state)

const submitForm = async (form) => {
  if (!form) return

  await form.validate(async (valid: boolean, fields) => {
    if (valid) {
      loading.value = true
      try {
        const userStore = useUserStore()
        await userStore.login(_loginForm.value)
        loading.value = false
        await router.replace({ path: '/' })
      } catch (error) {
        console.error('Error occurred during login:', error)
        loading.value = false
      }
    } else {
      console.log('表单验证失败', fields)
    }
  })
}

onMounted(() => {
  // 刷新验证码
  refreshCode()
})
</script>

<template>
  <div class="login_container">
    <div class="login_box">
      <div class="title">****后台管理系统</div>
      <el-form class="login_form" ref="_loginFormRef" :model="_loginForm" :rules="rules">
        <el-form-item prop="username">
          <el-input
            :prefix-icon="User"
            v-model="_loginForm.username"
            size="large"
            :placeholder="placeholder.username"
          />
        </el-form-item>

        <el-form-item prop="password">
          <el-input
            :prefix-icon="Lock"
            v-model="_loginForm.password"
            type="password"
            size="large"
            show-password
            :placeholder="placeholder.password"
          />
        </el-form-item>
        <el-form-item prop="code">
          <el-row class="code_row">
            <el-col :span="15">
              <el-input
                :prefix-icon="CircleCheck"
                size="large"
                :placeholder="placeholder.code"
                v-model.lazy="_loginForm.code"
              />
            </el-col>
            <el-col :span="7">
              <div class="code_pic" @click="refreshCode">
                <identify :identifyCode="identifyCode" />
              </div>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-button
            @click="submitForm(_loginFormRef)"
            type="primary"
            :loading="loading"
            size="large"
            @keyup.enter="submitForm(_loginFormRef)"
          >
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/variables.module';

.login_container {
  width: 100%;
  height: 100%;
  display: flex;

  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #203b57;

  .title {
    font-size: 25px;
    color: $primary;
    padding-bottom: 20px;
    text-shadow: 1px 1px #203b57;
    font-style: oblique;
    letter-spacing: 5px;
  }

  .login_box {
    width: $login_box_width;
    height: max-content;
    justify-content: space-around;
    background-color: #fff;
    padding: 40px 25px 30px 25px;
    text-align: center;
    font-weight: bolder;
    box-shadow:
      0 15px 8px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);

    .code_row {
      justify-content: space-between;
      max-width: $login_box_width - 85px;
      //width: $login_box_width - 100px;
    }
  }
}
</style>

<!--reset element-plus css-->
<style>
.ep-button {
  width: 100%;
}

.login_form {
  .ep-input__wrapper {
    margin-bottom: 5px;
  }
}
</style>
