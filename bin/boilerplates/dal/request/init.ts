import axiosLib from 'axios'
import {
  requestFx,
} from './units'

const axios = axiosLib.create({
  baseURL: '/api',
  withCredentials: true
})

axios.interceptors.response.use(undefined, (error) => {
  throw error
})

requestFx.use((params) => {
  const defaultHeaders = params.headers || {}
  const headers = {
    ...defaultHeaders,
  }

  if (params.accessToken) {
    headers['X-Authorization'] = params.accessToken
  }

  return axios.request({
    headers,
    method: params.method,
    url: params.url,
    params: params.query,
    data: params.body,
    baseURL: params.baseUrl,
  })
})
