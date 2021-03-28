
const routes = [
    {
        path: '/test-vue',
        name: 'test-vue',
        component: () => import(/* webpackChunkName: "about" */ '@/modules/main/components/vue-lessons/items-lessons/Test.vue')
    },

    // {
    //     path: '/shablony-komponentov2',
    //     name: 'shablony-komponentov2',
    //     component: () => import(/* webpackChunkName: "about" */ '@/modules/main/components/js-lessons/items-lessons/Template-componentsAll.vue')
    // },

]

  
export default routes;
