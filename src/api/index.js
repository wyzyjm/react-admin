/**
 * 所有接口
 */
import ajax from './ajax.js'

const BASE = 'http://localhost:3000' // 基础地址

// 登录 
export const reqLogin = (username, passwords) => {
    ajax('/login', {
        username,
        passwords
    }, 'POST')
}

// 添加用户
export const reqAddUser = (user) => {
    ajax('/manage/user/add', {
        user
    }, 'POST')
}


