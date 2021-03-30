
const routes = [

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
    {
        path: '/reduce-i-isarray',
        name: 'reduce-i-isarray',
        component: () => import(/* webpackChunkName: "about" */ '@/modules/main/components/js-lessons/items-lessons/ReduceAndIsArray.vue')
    },
    {
        path: '/splice-i-concat',
        name: 'splice-i-concat',
        component: () => import(/* webpackChunkName: "about" */ '@/modules/main/components/js-lessons/items-lessons/SpliceAndConcat.vue')
    },

]


export default routes;
