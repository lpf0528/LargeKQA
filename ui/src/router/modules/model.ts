/** When your routing table is too long, you can split it into small modules **/

const Layout = () => import('@/layout/index.vue');

const modelRouter = {
  path: '/model',
  component: Layout,
  redirect: '/model/complex-table',
  name: 'Model',
  meta: {
    title: 'LLM模型',
    icon: 'table'
  },
  children: [
    {
      path: 'complex-table',
      component: () => import('@/views/model/complex-table.vue'),
      name: 'ModelTable',
      meta: { title: 'LLM模型列表' }
    }
  ]
};
export default modelRouter;

