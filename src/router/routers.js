// Подключение роутов из модулей 

// Модуль header
import headerRouters  from '@/modules/header/routers';

// модуль main
// import mainRouters from '@/modules/main/routers';
import mainRoutersLessonJs from '@/modules/main/components/js-lessons/routers';
import mainRoutersLessonVue from '@/modules/main/components/vue-lessons/routers';
import mainRoutersLessonOther from '@/modules/main/components/other/routers';
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

    {
        path: '/feedback-form',
        name: 'feedback-form',
        meta: {
            layout: 'feedback-form'
          },
        component: () => import(/* webpackChunkName: "about" */ '@/layouts/feedback-form.vue')

    },

];


// в главный routes добавляем роуты из других модулей, в конец(push)



headerRouters.forEach(item => {
    routes.push( item );
})
// routes.push( headerRouters );


// MAIN BLOCK
// mainRouters.forEach(item => {
//     routes.push( item );
// })


// MAIN LESSONS JS
mainRoutersLessonJs.forEach(item => {
    routes.push( item );
})
// MAIN LESSONS VUE
mainRoutersLessonVue.forEach(item => {
    routes.push( item );
})
// Main lesson other
mainRoutersLessonOther.forEach(item => {
    routes.push( item );
})

// mainRouters.forEach(item => {
//     routes.push( item );
// })

// routes.push( mainRouters );
// routes.push( footerRouters );


// Ошибка 404, если страницы такой не существует
routes.push( {

    path: '*',
    name: 'error-404',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Error-404')

}, );

export default routes;
