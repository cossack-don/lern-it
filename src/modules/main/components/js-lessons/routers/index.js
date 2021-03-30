
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
        path: '/indexof',
        name: 'indexof',
        component: () => import(/* webpackChunkName: "about" */ '@/modules/main/components/js-lessons/items-lessons/IndexOf.vue')
    },
    {
        path: '/includes',
        name: 'includes',
        component: () => import(/* webpackChunkName: "about" */ '@/modules/main/components/js-lessons/items-lessons/Includes.vue')
    },
    {
        path: '/push-i-pop',
        name: 'push-i-pop',
        component: () => import(/* webpackChunkName: "about" */ '@/modules/main/components/js-lessons/items-lessons/PushAndPop.vue')
    },
    {
        path: '/shift-unshift-slice',
        name: 'shift-unshift-slice',
        component: () => import(/* webpackChunkName: "about" */ '@/modules/main/components/js-lessons/items-lessons/ShiftUnshiftSlice.vue')
    },
    {
        path: '/filter',
        name: 'filter',
        component: () => import(/* webpackChunkName: "about" */ '@/modules/main/components/js-lessons/items-lessons/Filter.vue')
    },
    {
        path: '/map',
        name: 'map',
        component: () => import(/* webpackChunkName: "about" */ '@/modules/main/components/js-lessons/items-lessons/Map.vue')
    },
    // 
    {
        path: '/test2-js',
        name: 'test2-js',
        component: () => import(/* webpackChunkName: "about" */ '@/modules/main/components/js-lessons/items-lessons/TestTwoJs.vue')
    },

]


export default routes;
