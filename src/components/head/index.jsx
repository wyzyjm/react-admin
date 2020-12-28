/**
 * 工具管理
 * 1. React
 * 2. 路由 : React-router-dom
 * 3. 日期格式化
 */
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import dayjs from 'dayjs'
/**
 * 资源管理
 * 1. 当前组件样式
 * 2. 天气
 * 3. 菜单数据
 */
import './index.less';
import { jsonpWeather } from '../../api/index.js'
import menuList from '../../config/menu.js';

class Head extends Component {

    state = {
        nowTime: dayjs().format('YYYY-MM-DD HH:mm:ss'), // 当前时间
        wea: '', // 天气
        wea_img: '' // 天气图片
    }

    // 获取当前时间
    getTime = () => {
        this.intervalId = setInterval(() => {
            const nowTime = dayjs().format('YYYY-MM-DD HH:mm:ss')
            this.setState({ nowTime })
        }, 1000);
    }
    // 获取天气
    getWeather = async () => {
        const { wea, wea_img } = await jsonpWeather('北京')
        if (wea_img === 'yin') {
            this.setState({
                wea_img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3037652374,2046011166&fm=26&gp=0.jpg'
            })
        } else if (wea_img === 'qing') {
            this.setState({
                wea_img: 'https://www.mingtai18.com/tianqiapi/skin/pitaya/yun.png'
            })
        }
        this.setState({ wea })
    }
    // 获取标题
    getTitle = () => {
        const path = this.props.location.pathname
        let title;
        menuList.forEach(item => {
            if (item.key === path) {
                title = item.title
            } else if (item.children && item.children.length > 0) {
                const hasTitle = item.children.find(cItem => cItem.key === path)
                if (hasTitle) {
                    title = hasTitle.title
                }
            }
        })
        console.log(path);
        return title
    }
    // 第一次render 之后执行
    componentDidMount() {
        this.getTime() // 获取时间
        this.getWeather() // 获取天气
    }

    // 组件销毁
    componentWillUnmount() {
        clearInterval( this.intervalId )
    }

    render() {
        // 获取值
        const { nowTime, wea, wea_img } = this.state
        // console.log(this.state);
        const title = this.getTitle()
        return (
            <div className="head">
                <div className="head-top">
                    <span>欢迎,请登录!</span>
                    <a href="/login">登录</a>
                </div>
                <div className="head-bottom">
                    <div className="head-bottom-left"> {title} </div>
                    <div className="head-bottom-right">
                        <span>{nowTime}</span>
                        <img src={wea_img} alt="weather" />
                        <span>{wea}</span>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(Head)