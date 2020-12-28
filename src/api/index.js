/**
 * 所有接口
 */
import ajax from './ajax.js'
import { message } from 'antd';
import jsonp from 'jsonp';
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

/**
 * jsonp请求接口
 */
export const jsonpWeather = (city) => {
    return new Promise((resolve, reject) => {
        const url = `https://v0.yiketianqi.com/api?version=v61&appid=82797537&appsecret=wIG3HMUL&cityid=${city}`
        jsonp(url, {}, (err, data) => {
            console.log('jsonp()', err, data);
            if (!err) {
                const {wea,wea_img} = data
                resolve({wea,wea_img} )
            } else {
                message.error('天气请求失败!')
            }
        })
    })
}

