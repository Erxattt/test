import axios from 'axios'
import type {AxiosResponse} from 'axios'

import { ElMessage } from "element-plus";
import 'element-plus/theme-chalk/src/message.scss'
import {GetToken} from "@/utils/storage";
interface myAxiosResponse extends AxiosResponse{
    data:{
        data?:any,
        message?:string,
        code:string | number
    }
}
// axios对象
const service = axios.create({
    // axios请求基础URL
    // 由于本项目使用mock + vite-plugin-mock启动的mock服务，默认使用的端口号与页面一致
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 5000
})

// 添加请求拦截器
service.interceptors.request.use(function (config) {
    const token = GetToken()
    config.headers.token =token ? token : null
    // 在发送请求之前做些什么

    config.headers["Content-type"] = "application/json;charset=UTF-8";
    return config;
}, function (error) {
    // ElMessage.error(error)

    // 对请求错误做些什么
    return Promise.reject(error);
});
// 添加响应拦截器
// @ts-ignore TODO
service.interceptors.response.use(function (response) {
    const myResponse:myAxiosResponse = response
    const {message,code,data} = myResponse.data
    if (code!== 200 && message != null ){
        ElMessage.error({
            message:message
        })
    }
    if (code == 200 && message !=null ){
        ElMessage.success({
            message:message
        })
    }

    // 对响应数据做点什么
    return myResponse.data;
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // ElMessage.error(error)
    // 对响应错误做点什么
    return Promise.reject(error);
});
export default service
