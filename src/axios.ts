import axios from 'axios'
import store from './store'

axios.defaults.baseURL = 'http://localhost:3000'
axios.interceptors.request.use(value => {
  store.commit('setLoading', true)
  return value
})

axios.interceptors.response.use(value => {
  // 因为请求的本地，加个定时器显示一下 Loading 效果
  setTimeout(() => {
    store.commit('setLoading', false)
  }, 1000)
  return value
})

export default axios
