import service from "@/utils/request";
import type {loginForm} from "@/types/user";
export function login(data:loginForm){
    return service({
        url: '/user/login',
        method: 'post',
        data
    })
}
