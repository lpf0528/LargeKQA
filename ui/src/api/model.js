import request from '@/utils/request';

export function fetchModelList(query) {
  return request({
    url: '/settings/models/',
    method: 'get',
    params: query
  });
}

// export function fetchArticle(id) {
//   return request({
//     url: '/vue-element-admin/article/detail',
//     method: 'get',
//     params: { id }
//   });
// }

// export function fetchPv(pv) {
//   return request({
//     url: '/vue-element-admin/article/pv',
//     method: 'get',
//     params: { pv }
//   });
// }

export function createModel(data) {
  return request({
    url: '/settings/models/',
    method: 'post',
    data
  });
}

// export function updateArticle(data) {
//   return request({
//     url: '/settings/models/',
//     method: 'post',
//     data
//   });
// }
