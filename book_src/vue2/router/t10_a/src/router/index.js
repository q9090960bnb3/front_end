import VueRouter from "vue-router";

import About from '../pages/About.vue'
import Home from '../pages/Home'
import News from '../pages/Home/News.vue'
import Message from '../pages/Home/Message'
import Detail from '../pages/Home/Message/Detail.vue'

const router = new VueRouter({
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
                            name: 'detailRouter',
                            path: 'detail/:id/:title',
                            component: Detail,
                            // 对象写法，把 id title 命名为 a 和 b 传入 Detail 属性去, params参数有效
                            // props: {
                            //     a: 'id',
                            //     b: 'title'
                            // }
                            
                            // 布尔写法 params 参数有效, 将 id title 传入 Detail
                            props: true

                            // 函数写法, 可以解决其他传参
                            // props(route){
                            //     return {
                            //         id: route.query.id,
                            //         title: route.query.title 
                            //     }
                            // }
                            
                        }
                    ]
                }
            ]
        }
    ]
})

// 全局前置路由守卫 每次路由切换之前调用和初始化时被调用
router.beforeEach((to, from, next)=>{

    if (to.path === '/home/news' || to.path === '/home/message'){
// 只有为xiaoxue时才放行 news 和 message
if (localStorage.getItem('school') === 'xiaoxue') next()
else{
    alert('学校名不正确，无权查看')
}
    }else{
        next()
    }

    
})

export default router