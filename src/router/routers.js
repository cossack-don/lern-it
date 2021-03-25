// Подключение роутов из модулей 

// Модуль header
// import headerRouters  from '@/modules/main/routers';

// модуль main
import mainRouters from '@/modules/main/routers';

// модуль footer
// import footerRouters from '@/modules/main/routers';


// Главная страница
const routes = [

    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "about" */ '@/modules/main/pages/WrapperMainContent.vue')

    },

];


// в главный routes добавляем роуты из других модулей, в конец(push)

// routes.push( headerRouters );
routes.push( mainRouters );
// routes.push( footerRouters );


// Ошибка 404, если страницы такой не существует
routes.push( {

    path: '*',
    name: 'error-404',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Error-404')

}, );

export default routes;
