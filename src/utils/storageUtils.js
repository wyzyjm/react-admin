/**
 * 数据存储
 *  原生js存, 浏览器兼容性
 *  可以用 store.js
 */

export default {
    /**
     * 存
     */

    saveData(name, data) {
        localStorage.setItem(name, JSON.stringify(data))
    },

    /**
     * 读
     */
     getData(name) {
        return JSON.parse(localStorage.getItem(name) || '{}')
    },

    /**
     * 删
     */
    removeData(name){
        localStorage.removeItem(name)
    }
}