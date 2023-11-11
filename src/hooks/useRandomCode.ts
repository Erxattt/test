/**
 * 随机生成4位数字 用于登录页面生成图新验证码
 */
import {ref} from "vue";
export default function () {
    const identifyCode = ref("")
    const identifyCodes = ref<any>("1234567890")
    function randomNum (min:number, max:number) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    function refreshCode() {
        identifyCode.value = "";
        makeCode(identifyCodes, 4);
    }
    function makeCode(o:string, l:number) {
        for (let i = 0; i < l; i++) {
            identifyCode.value += identifyCodes.value[
                randomNum(0, identifyCodes.value.length)
                ];
        }
    }
    return {identifyCode,refreshCode}

}
