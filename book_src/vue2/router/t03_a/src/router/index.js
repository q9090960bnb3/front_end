import VueRouter from "vue-router";

import About from '../pages/About.vue'
import Home from '../pages/Home'
import News from '../pages/Home/News.vue'
import Message from '../pages/Home/Message'
import Detail from '../pages/Home/Message/Detail.vue'

export default new VueRouter({
    routes: [
        {
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: 'news',
                    component: News
                },
                {
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            path: 'detail',
                            component: Detail
                        }
                    ]
                }
            ]
        }
    ]
})