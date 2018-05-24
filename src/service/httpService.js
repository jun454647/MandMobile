
/**
 * 数据请求--axios cjq 2018-05-23
 * */
import axios from 'axios'
import Config from '../config'

/**
 * 请求配置
 * */
var instance = axios.create({
  baseURL:  Config.BASE_URL,
  timeout: 5000,
  headers: {'Content-Type': ''}
})

/**
 * function GET
 * url 接口名
 * params 参数
 * */
function fnGET(url, params) {
  return fnHTTP(url, params, 'get')
}

/**
 * function POST
 * url 接口名
 * params 参数
 * */
function fnPOST(url, params) {
  return fnHTTP(url, params, 'post')
}

/**
 * function HTTP
 * url 接口名
 * params 参数
 * method 请求方式
 * */
function fnHTTP(url, params, method) {
  return new Promise((resolve, reject) => {
    axios({
      method: method,
      url: url,
      params: params
    }).then(function (response) {
      resolve(response)
    }).catch(function (error) {
      reject(error)
    })
  })
}

/**
 * function ALL
 * alls 请求对象数组
 * {
 *    url: 接口名,
 *    params: 请求参数对象
 *    method: 请求方式 //'get' or 'post'
 * }
 * */
function fnALL(alls) {
  let https = []
  alls.map(function (all) {
    https.push(fnAXIOS(all.url, all.params, all.method?all.method:'get'))
  })
  return new Promise((resolve, reject) => {
    axios.all(https).then(axios.spread(function (acct, perms) {
      resolve(acct)
    })).catch(function (error) {
      reject(error)
    })
  })
}

/**
 * function AXIOS
 * url 接口吗
 * params 参数
 * method 请求方式
 * */
function fnAXIOS(url, params, method) {
  return axios({method: method, url: url, params: params})
}

const httpService = {
  'GET': fnGET,
  'POST': fnPOST,
  'ALL': fnALL
}
export default httpService
