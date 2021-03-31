const routes = [
    {
        path: '/search-repos-github',
        name: 'search-repos-github',
        component: () => import(/* webpackChunkName: "about" */ '@/modules/header/pages/SearchReposGithub.vue')
    // search-repos-github
    },
    {
        path: '/job',
        name: 'job',
        component: () => import(/* webpackChunkName: "about" */ '@/modules/header/pages/Job.vue')
    // search-repos-github
    }
]

// routes
export default routes;




