const routes = {

    // path: '/auth',
    // component: () => import( /* webpackChunkName: "auth.core" */'../core' ),

    
    path: '/regulyarnye-vrozheniya',
    name: 'regulyarnye-vrozheniya',
    component: () => import(/* webpackChunkName: "about" */ '@/modules/main/pages/Test.vue')

}; // routes

export default routes;
