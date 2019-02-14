import Vue from 'vue'
import Router from 'vue-router'

/* views */
import Layout from '../views/Layout'

Vue.use(Router)

const routesMap = [{
    path: '/',
    component: Layout,
    name: 'Layout'
  },
  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: {
      title: 'Example',
      icon: 'example'
    },
    children: [{
      path: 'table',
      name: 'DemoTable',
      component: () =>
        import('../views/demo/demotable'),
      meta: {
        title: 'DemoTable',
        icon: 'table'
      }
    }, {
      path: 'table1',
      name: 'DemoTable1',
      component: () =>
        import('../views/demo/demotable1'),
      meta: {
        title: 'DemoTable1',
        icon: 'table'
      }
    }, {
      path: 'form',
      name: 'Form',
      component: () =>
        import('../views/demo/Form'),
      meta: {
        title: 'Form',
        icon: ''
      }
    }]
  }
];

export default new Router({
  routes: routesMap
})