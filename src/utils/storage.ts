import { getCookie, setCookie ,removeCookie } from 'typescript-cookie'
const TOKEN_KEY = 'token'
export const SetToken =(token:string)=>{
    setCookie(TOKEN_KEY,token)
}
export const GetToken = () =>{
    return getCookie(TOKEN_KEY)
}
export const RemoveToken = ()=>{
    removeCookie(TOKEN_KEY)
}
