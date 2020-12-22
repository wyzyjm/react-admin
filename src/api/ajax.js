/**
 * 异步发送请求模块
 */
import axios from 'axios'
import { message } from 'antd'

export default function ajax(url, data = {}, type = 'GET') {
    return new Promise((resolve, reject) => {
        let promise;
        if (type === 'GET') {
            promise = axios.get(url, {
                params: data
            })
        } else {
            promise = axios.post(url, data)
        }
        // 判断结果
        promise.then(res => {
            resolve(res.data)
        }).catch(err => {
            message.error(err.message)
        })
    })

};