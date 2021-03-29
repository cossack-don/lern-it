
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
    {
        path: '/obekt-data',
        name: 'obekt-data',
        component: () => import(/* webpackChunkName: "about" */ '@/modules/main/components/js-lessons/items-lessons/Date.vue')
    },
    {
        path: '/test2-js',
        name: 'test2-js',
        component: () => import(/* webpackChunkName: "about" */ '@/modules/main/components/js-lessons/items-lessons/TestTwoJs.vue')
    },

]

  
export default routes;
