import { createStore } from 'vuex'
const defaultState = {
    count: 0
}
let customModules: any = {}
const customModuleFiles: any = import.meta.globEager("./modules/*.ts")  
Object.keys(customModuleFiles).forEach(key=>{
    const keys = key.replace(/(\.\/|\.js)/g, '')
    const moduleName:string = keys.split('/')[1]
    customModules[moduleName] = customModuleFiles[key].default
})
const store = createStore({
    modules: {
      ...customModules,
    }
  })
  
export default store
