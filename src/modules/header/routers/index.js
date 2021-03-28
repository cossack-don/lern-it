const routes = [
    {
        path: '/search-repos-github',
        name: 'search-repos-github',
        component: () => import(/* webpackChunkName: "about" */ '@/modules/header/pages/SearchReposGithub.vue')
    // search-repos-github
    }
]

// routes
export default routes;




