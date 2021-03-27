import axios from 'axios';

// 方式三：
export function request(config){
  // 1.创建axios实例
    const axios1 = axios.create({
      baseURL:'http://123.207.32.32:8000',
      timeout:5000
    })
// 2.axios的拦截器
axios1.interceptors.request.use(config=>{
  return config
},err=>{
  return err
})
axios1.interceptors.response.use(res=>{
  return res.data
},err=>{
  return err
})
// 3.发送真正的网络请求
  return axios1(config)
}

