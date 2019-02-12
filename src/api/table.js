import axios from '@/utils/request'

export function getList(params) {
  return axios({
    url: '/table/list',
    method: 'get',
    params
  })
}