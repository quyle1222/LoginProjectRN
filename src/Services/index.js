import { Config } from '@/Config'
import handleError from '@/Services/utils/handleError'
import axios from 'axios'
import { LocalStorage } from './utils/LocalStorage'
const instance = axios.create({
  baseURL: Config.BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 3000,
})

instance.interceptors.request.use(
  async function (config) {
    const token = await LocalStorage.getToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  function (err) {
    return Promise.reject(err)
  },
)

instance.interceptors.response.use(
  response => response,
  ({ message, response: { data, status } }) => {
    return handleError({ message, data, status })
  },
)

export default instance
