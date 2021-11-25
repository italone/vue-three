import axios from './axios'

// post默认请求
export const post = (apiUrl : string, params : Object) => {
  return axios.post(apiUrl, params)
}

// get默认请求
export const get = (apiUrl : string, params : Object) => {
  return axios.get(apiUrl, { params })
}

// put默认请求
export const $put = (apiUrl : string, params : Object) => {
  return axios.put(apiUrl, params)
}
// delete默认请求
export const $delete = (apiUrl : string, params : Object) => {
  return axios.delete(apiUrl, { data: params })
}


