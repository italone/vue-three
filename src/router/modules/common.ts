const common: Array<Object> = [
  {
    path: '/user',
    name: 'user',
    component: () => import('@/views/user/index.vue')
  },
  {
    path: '/role',
    name: 'role',
    component: () => import('@/views/role/index.vue')
  },
]

export default common