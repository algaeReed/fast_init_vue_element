import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

const router = new Router({
    mode: "history",
    routes: [{
        path: '/home',
        name: 'home',
        component: () =>
            import( /* webpackChunkName: "home" */ '../common/home.vue'),
        meta: {
            title: '主页',
        },

    },
    ]
});
export default router;