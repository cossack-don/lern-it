
const routes = [
    {
        path: '/test-js',
        name: 'test-js',
        component: () => import(/* webpackChunkName: "about" */ '@/modules/main/components/js-lessons/items-lessons/Test.vue')
    },

    {
        path: '/shablony-komponentov',
        name: 'shablony-komponentov',
        component: () => import(/* webpackChunkName: "about" */ '@/modules/main/components/js-lessons/items-lessons/Template-componentsAll.vue')
    },

]

  
export default routes;
