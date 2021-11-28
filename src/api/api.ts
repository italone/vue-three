/**
 * 抽离接口地址
 * 如果地址很多，可以按模块拆分modules
 */
  const api: any = import.meta.env.VITE_APP_API

  // // 导入路由模块
  let apiModules:any = {}
  const apiModuleFiles = import.meta.globEager("./modules/*.ts")  
  Object.keys(apiModuleFiles).forEach(item=>{
    const objs: any = apiModuleFiles[item].default  
    Object.keys(objs).forEach(key => {
      apiModules[key] = objs[key]
    })
  })
  import { get, post, $delete, $put } from '../utils/http'
  

  export default {    
    reIndex: api + '/arrange/reIndex', // 调换顺序
    ...apiModules
  }
 