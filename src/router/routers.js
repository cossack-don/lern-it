// Подключение роутов из модулей 

// Модуль header
import headerRouters  from '@/modules/header/routers';

// модуль main
import mainRouters from '@/modules/main/routers';

// модуль footer
// import footerRouters from '@/modules/footer/routers';



const routes = [
// Главная страница / default layout
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "about" */ '@/modules/main/pages/WrapperMainContent.vue')

    },

    // layout search-repository-github
    {
        path: '/search-repository-github',
        name: 'search-repository-github',
        meta: {
            layout: 'search-repository-github'
          },
        component: () => import(/* webpackChunkName: "about" */ '@/layouts/search-repository-github.vue')

    },

    {
        path: '/registration',
        name: 'registration',
        meta: {
            layout: 'registration'
          },
        component: () => import(/* webpackChunkName: "about" */ '@/layouts/registration.vue')

    },

];


// в главный routes добавляем роуты из других модулей, в конец(push)

routes.push( headerRouters );
routes.push( mainRouters );
// routes.push( footerRouters );


// Ошибка 404, если страницы такой не существует
routes.push( {

    path: '*',
    name: 'error-404',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Error-404')

}, );

export default routes;
