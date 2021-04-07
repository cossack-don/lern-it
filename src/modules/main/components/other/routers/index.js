
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
    {
        path: '/to-code',
        name: 'to-code',
        component: () => import(/* webpackChunkName: "about" */ '@/modules/main/components/other/items-lessons/toCodeKurs.vue')
    },
    {
        path: '/code-me-all',
        name: 'code-me-all',
        component: () => import(/* webpackChunkName: "about" */ '@/modules/main/components/other/items-lessons/codeMeOldNew.vue')
    },
    {
        path: '/put-izucheniya-js',
        name: 'put-izucheniya-js',
        component: () => import(/* webpackChunkName: "about" */ '@/modules/main/components/other/items-lessons/roadLessonsJs.vue')
    },
    {
        path: '/moi-narabotki-codepen',
        name: 'moi-narabotki-codepen',
        component: () => import(/* webpackChunkName: "about" */ '@/modules/main/components/other/items-lessons/myCodePen.vue')
    },
    {
        path: '/firebase',
        name: 'firebase',
        component: () => import(/* webpackChunkName: "about" */ '@/modules/main/components/other/items-lessons/firebase.vue')
    },
    {
        path: '/ssylki-youtobe-urokov',
        name: 'ssylki-youtobe-urokov',
        component: () => import(/* webpackChunkName: "about" */ '@/modules/main/components/other/items-lessons/ListYoutobeLinksLessons.vue')
    },
    {
        path: '/metodologiya-agile-i-scrum',
        name: 'metodologiya-agile-i-scrum',
        component: () => import(/* webpackChunkName: "about" */ '@/modules/main/components/other/items-lessons/Agile.vue')
    },
    {
        path: '/uchebnik-basicweb-po-js',
        name: 'uchebnik-basicweb-po-js',
        component: () => import(/* webpackChunkName: "about" */ '@/modules/main/components/other/items-lessons/BookBasicweb.vue')
    },
    {
        path: '/uchebnik-ts',
        name: 'uchebnik-ts',
        component: () => import(/* webpackChunkName: "about" */ '@/modules/main/components/other/items-lessons/BookTS.vue')
    },
    {
        path: '/primer-arhitektury-prilozheniya',
        name: 'primer-arhitektury-prilozheniya',
        component: () => import(/* webpackChunkName: "about" */ '@/modules/main/components/other/items-lessons/TemplateNewApp.vue')
    },
    {
        path: '/testovye-zadaniya',
        name: 'testovye-zadaniya',
        component: () => import(/* webpackChunkName: "about" */ '@/modules/main/components/other/items-lessons/AllTz.vue')
    },

]


export default routes;
