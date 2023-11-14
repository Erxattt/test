import { defineStore } from 'pinia'
import { login } from '@/api/user'
import type { loginForm } from '@/types/user'
import { GetToken, SetToken } from '@/utils/storage'
import { ElNotification } from 'element-plus'
import 'element-plus/theme-chalk/src/notification.scss'
import { getNameByChTime } from '@/utils/time'
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()
export const useUserStore = defineStore('userStore', {
  state: () => ({
    token: GetToken()
  }),
  actions: {
    login(data: loginForm) {
      const { username, password } = data
      console.log(`登录表单>username:\t${username}\tpassword:\t${password}`)

      return new Promise((resolve, reject) => {
        login({ username: username, password: password })
          .then((res) => {
            // @ts-ignore
            const { code, message } = res
            const { token } = res.data || {}
            if (code != 200) {
              reject(message)
            } else {
              this.$state.token = token
              SetToken(token)
              ElNotification({
                title: `欢迎登录${appStore.app_name}`,
                message: `${getNameByChTime()}好！ 管理员`,
                type: 'success'
              })
              resolve(code)
            }
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    logout() {
      return new Promise((resolve, reject) => {
        reject()
      })
    }
  }
})
