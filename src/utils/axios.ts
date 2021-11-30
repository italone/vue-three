/* eslint-disable new-cap */
import Axios from 'axios'
import { ElMessage } from 'element-plus'
import { getToken, removeToken, setToken } from './auth'
export let baseURL : any = import.meta.env.VITE_APP_API;
// 创建axios实例
const service = Axios.create({
  baseURL: '127.0.0.1',
  timeout: 150000
})
var obj:any = new Object()
var url:string = window.location.href
var arr = url.split('?')[1] ? url.split('?')[1].split('&') : []
arr.forEach(item=>{
  let key = item.split('=')[0]
  obj[key] = item.split('=')[1]
})
// 添加请求拦截器
service.interceptors.request.use(
  config => {
    const token = getToken() || obj.token || ''
    if (token) {
      config.headers['access_token'] = token
    }
    return config
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
service.interceptors.response.use(
  ({ data }) => {
    if (data.Code === "-999" || data.Code === 2) {
      window.localStorage.clear()
      window.sessionStorage.clear()
      removeToken()
      return;
    }
    if (data.Code !== 200) {
      ElMessage.closeAll();
      ElMessage({
        message: data.msg || data.Message,
        showClose: true,
        type: 'error',
        duration: 3500
      })
      return Promise.reject(data);
    }
    setToken(getToken() || obj.token)
    return data;
  },
  err => {
    // 对响应错误做点什么
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          err.message = '请求错误'
          break
        case 401:
          err.message = '未授权，请登录'
          break
        case 403:
          err.message = '拒绝访问'
          break
        case 404:
          err.message = `请求地址出错: ${err.response.config.url}`
          break
        case 408:
          err.message = '请求超时'
          break
        case 500:
          err.message = '服务器内部错误'
          break
        case 501:
          err.message = '服务未实现'
          break
        case 502:
          err.message = '网关错误'
          break
        case 503:
          err.message = '服务不可用'
          break
        case 504:
          err.message = '网关超时'
          break
        case 505:
          err.message = 'HTTP版本不受支持'
          break
        default:
          err.message = '系统错误'
          break
      }
    } else {
      err.message = '连接服务器失败!'
    }
    ElMessage.closeAll();
    ElMessage({
      message: err.message,
      showClose: true,
      type: 'error',
      duration: 4 * 1000
    })
    // 对响应错误做点什么
    return Promise.reject(err)
  }
)

export default service
