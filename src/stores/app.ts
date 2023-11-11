import { defineStore } from 'pinia'

export const useAppStore= defineStore("appStore",{
    state: () => ({
        APP_NAME: import.meta.env.VITE_APP_NAME,
        APP_BASE_URL : import.meta.env.VITE_BASE_URL
    }),
    getters: {
        app_name: (state) => state.APP_NAME,
        app_base_url :(state)=>state.APP_BASE_URL
    },

})
