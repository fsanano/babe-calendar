
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {
        path: '',
        meta: { auth: true },
        component: () => import('pages/Index.vue'),
      },
    ],
  },
  {
    path: '/auth',
    component: () => import('layouts/Auth.vue'),
    children: [
      {
        path: '/',
        name: 'auth',
        component: () => import('pages/auth/Index.vue'),
      },
      {
        path: 'signin',
        name: 'signin',
        component: () => import('pages/auth/SignIn.vue'),
      },
      {
        path: 'signup',
        name: 'signup',
        component: () => import('pages/auth/SignUp.vue'),
      },
    ],
  },
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue'),
  });
}

export default routes;
