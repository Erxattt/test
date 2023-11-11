import type {MockMethod} from "vite-plugin-mock"

const mock: Array<MockMethod> = [
    {
        // 接口路径
        url: '/user/login',
        // 接口方法
        method: 'post',

        // 返回数据
        response: (req) => {
            const {body: {username, password}} = req
            console.log(username,password)
            if (username === 'admin' && password === '123456'){
                return {
                    code: 200,
                    message: null,
                    data: { token: "fake_token" }
                }
            }else {

                return {
                    code: 400,
                    message: '用户名或密码错误',
                    data : null
                }
            }

        }
    }
]

export default mock
