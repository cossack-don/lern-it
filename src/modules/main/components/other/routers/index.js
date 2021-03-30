
const routes = [
    {
        path: '/mirage-api',
        name: 'mirage-api',
        component: () => import(/* webpackChunkName: "about" */ '@/modules/main/components/other/items-lessons/MirageApiLink.vue')
    },
    {
        path: '/bem-dokumentaciya',
        name: 'bem-dokumentaciya',
        component: () => import(/* webpackChunkName: "about" */ '@/modules/main/components/other/items-lessons/BEMdoca.vue')
    },
    {
        path: '/web-dev-s-nulya-kursy',
        name: 'web-dev-s-nulya-kursy',
        component: () => import(/* webpackChunkName: "about" */ '@/modules/main/components/other/items-lessons/WebDevWithNullKurs.vue')
    },
    {
        path: '/jsonplaceholder-api',
        name: 'jsonplaceholder-api',
        component: () => import(/* webpackChunkName: "about" */ '@/modules/main/components/other/items-lessons/JsonPlaceHolder.vue')
    },

]


export default routes;
