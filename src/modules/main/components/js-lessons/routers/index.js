
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
    {
        path: '/find-findindex-lastindexof',
        name: 'find-findindex-lastindexof',
        component: () => import(/* webpackChunkName: "about" */ '@/modules/main/components/js-lessons/items-lessons/FindAndFindIndexAndLastIndexJOf.vue')
    },
    {
        path: '/sort-i-reverse',
        name: 'sort-i-reverse',
        component: () => import(/* webpackChunkName: "about" */ '@/modules/main/components/js-lessons/items-lessons/SortAndReverse.vue')
    },
    {
        path: '/split-i-join',
        name: 'split-i-join',
        component: () => import(/* webpackChunkName: "about" */ '@/modules/main/components/js-lessons/items-lessons/SplitAndJoin.vue')
    },
    {
        path: '/every-i-some',
        name: 'every-i-some',
        component: () => import(/* webpackChunkName: "about" */ '@/modules/main/components/js-lessons/items-lessons/EveryAndSome.vue')
    },
    {
        path: '/flat-fill-keys',
        name: 'flat-fill-keys',
        component: () => import(/* webpackChunkName: "about" */ '@/modules/main/components/js-lessons/items-lessons/FlatAndFillAndKeys.vue')
    },

]


export default routes;
