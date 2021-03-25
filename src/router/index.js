import Vue from 'vue';
import VueRouter from 'vue-router';

// импорт всех роутов из точки входа (где импортирую все модули)
import routes from './routers';

Vue.use( VueRouter );

const router = new VueRouter( {

    // менять для продакшена!!!
    mode: 'history',
    base: process.env.BASE_URL,
    routes,

} );

export default router;
