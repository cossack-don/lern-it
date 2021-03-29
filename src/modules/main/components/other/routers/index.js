
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


]

  
export default routes;
