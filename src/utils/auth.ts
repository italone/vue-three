const TokenKey = 'access_token'

export const getToken = ()=> {
  return window.sessionStorage.getItem(TokenKey)
}

export const setToken = (token : string): any => {
  return window.sessionStorage.setItem(TokenKey, token)
}

export const removeToken = ()=> {
  return window.sessionStorage.removeItem(TokenKey)
}