import { defineStore } from 'pinia'

export const useMenuStore= defineStore("menuStore",{
    state: () => ({
        isCollapse:false
    }),
    actions:{
        handleCollapse(){
            this.isCollapse = !this.isCollapse
        }
    },
    // getters:{
    //     is_Collapse:(state)=> state.isCollapse
    // }

})
