import axios from '@/utils/request'

export function getList(params) {
  return axios({
    url: '/tableList',
    method: 'get',
    params
  })
}