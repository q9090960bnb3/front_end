# 路由

```sh
# vue2 仅支持 vue-router 3版本，不支持 4版本
pnpm i vue-router@3.5.3
```

## 基本使用

{% codetabs %}
@import "t00_a/src/main.js" {title="main.js" code_block=true}
@import "t00_a/src/router/index.js" {title="router/index.js" code_block=true}
@import "t00_a/src/App.vue" {as="html" title="App.vue" code_block=true}
@import "t00_a/src/components/About.vue"  {as="html" title="components/About.vue" code_block=true}
@import "t00_a/src/components/Home.vue"  {as="html" title="components/Home.vue" code_block=true}
{% endcodetabs %}

## 标准化

- 目录树

```sh
├── App.vue
├── components          -- 存普通控件
│   └── Banner.vue
├── main.js
├── pages               -- 存页面控件
│   ├── About.vue
│   └── Home.vue
└── router
    └── index.js
```

- 代码

{% codetabs %}
@import "t01_a/src/main.js" {title="main.js" code_block=true}
@import "t01_a/src/router/index.js" {title="router/index.js" code_block=true}
@import "t01_a/src/App.vue" {as="html" title="App.vue" code_block=true}
@import "t01_a/src/pages/About.vue"  {as="html" title="pages/About.vue" code_block=true}
@import "t01_a/src/pages/Home.vue"  {as="html" title="pages/Home.vue" code_block=true}
@import "t01_a/src/components/Banner.vue"  {as="html" title="components/Banner.vue" code_block=true}
{% endcodetabs %}

## 嵌套路由

- 目录树

```sh
├── App.vue
├── components
│   └── Banner.vue
├── main.js
├── pages
│   ├── About.vue
│   └── Home
│       ├── index.vue
│       ├── Message.vue
│       └── News.vue
└── router
    └── index.js
```

- 代码

{% codetabs %}
@import "t02_a/src/main.js" {title="main.js" code_block=true}
@import "t02_a/src/router/index.js" {title="router/index.js" code_block=true}
@import "t02_a/src/App.vue" {as="html" title="App.vue" code_block=true}
@import "t02_a/src/pages/About.vue"  {as="html" title="pages/About.vue" code_block=true}
@import "t02_a/src/pages/Home/index.vue"  {as="html" title="/pages/Home/index.vue" code_block=true}
@import "t02_a/src/pages/Home/Message.vue"  {as="html" title="/pages/Home/Message.vue" code_block=true}
@import "t02_a/src/pages/Home/News.vue"  {as="html" title="/pages/Home/News.vue" code_block=true}
@import "t02_a/src/components/Banner.vue"  {as="html" title="components/Banner.vue" code_block=true}
{% endcodetabs %}

## query 传参

```html
<!-- 第一种方式 -->
<!-- <router-link :to="`/home/message/detail?id=${o.id}&msg=${o.title}`">{{o.title}}</router-link> -->

<!-- 第二种方式 对象方式 -->
<router-link :to="{
    path: '/home/message/detail',
    query: {
    id: o.id,
    msg: o.title
    }
}">{{o.title}}</router-link>
```

{% codetabs %}
@import "t03_a/src/main.js" {title="main.js" code_block=true}
@import "t03_a/src/router/index.js" {title="router/index.js" code_block=true}
@import "t03_a/src/App.vue" {as="html" title="App.vue" code_block=true}
@import "t03_a/src/pages/About.vue"  {as="html" title="pages/About.vue" code_block=true}
@import "t03_a/src/pages/Home/index.vue"  {as="html" title="/pages/Home/index.vue" code_block=true}
@import "t03_a/src/pages/Home/News.vue"  {as="html" title="/pages/Home/News.vue" code_block=true}
@import "t03_a/src/pages/Home/Message/index.vue"  {as="html" title="/pages/Home/Message/index.vue" code_block=true}
@import "t03_a/src/pages/Home/Message/Detail.vue"  {as="html" title="/pages/Home/Message/Detail.vue" code_block=true}
@import "t03_a/src/components/Banner.vue"  {as="html" title="components/Banner.vue" code_block=true}
{% endcodetabs %}

## 命名路由

- 当传参路径太长适合此种方式

```js
{
    path: 'message',
    component: Message,
    children: [
        {
            name: 'detailRouter',
            path: 'detail',
            component: Detail
        }
    ]
}
```

- router

```html
<router-link :to="{
    name: 'detailRouter', // 简化方式，路径太长时使用
    query: {
    id: o.id,
    msg: o.title
    }
}">{{o.title}}</router-link>
```

{% codetabs %}
@import "t04_a/src/main.js" {title="main.js" code_block=true}
@import "t04_a/src/router/index.js" {title="router/index.js" code_block=true}
@import "t04_a/src/App.vue" {as="html" title="App.vue" code_block=true}
@import "t04_a/src/pages/About.vue"  {as="html" title="pages/About.vue" code_block=true}
@import "t04_a/src/pages/Home/index.vue"  {as="html" title="/pages/Home/index.vue" code_block=true}
@import "t04_a/src/pages/Home/News.vue"  {as="html" title="/pages/Home/News.vue" code_block=true}
@import "t04_a/src/pages/Home/Message/index.vue"  {as="html" title="/pages/Home/Message/index.vue" code_block=true}
@import "t04_a/src/pages/Home/Message/Detail.vue"  {as="html" title="/pages/Home/Message/Detail.vue" code_block=true}
@import "t04_a/src/components/Banner.vue"  {as="html" title="components/Banner.vue" code_block=true}
{% endcodetabs %}

## params 传参

```html
<!-- 第一种方式 -->
<!-- <router-link :to="`/home/message/detail/${o.id}/${o.title}`">{{o.title}}</router-link> -->

<!-- 第二种方式 对象方式 -->
<router-link :to="{
    name: 'detailRouter', // 对象方式只能使用命名路由
    params: {
    id: o.id,
    title: o.title
    }
}">{{o.title}}</router-link>
```

{% codetabs %}
@import "t05_a/src/main.js" {title="main.js" code_block=true}
@import "t05_a/src/router/index.js" {title="router/index.js" code_block=true}
@import "t05_a/src/App.vue" {as="html" title="App.vue" code_block=true}
@import "t05_a/src/pages/About.vue"  {as="html" title="pages/About.vue" code_block=true}
@import "t05_a/src/pages/Home/index.vue"  {as="html" title="/pages/Home/index.vue" code_block=true}
@import "t05_a/src/pages/Home/News.vue"  {as="html" title="/pages/Home/News.vue" code_block=true}
@import "t05_a/src/pages/Home/Message/index.vue"  {as="html" title="/pages/Home/Message/index.vue" code_block=true}
@import "t05_a/src/pages/Home/Message/Detail.vue"  {as="html" title="/pages/Home/Message/Detail.vue" code_block=true}
@import "t05_a/src/components/Banner.vue"  {as="html" title="components/Banner.vue" code_block=true}
{% endcodetabs %}

## props 方式传参

- router/index.js

```html
<router-link
    :to="{
        name: 'detailRouter', // 对象方式只能使用命名路由
        params: {
            id: o.id,
            title: o.title,
        },
    }"
    >{{ o.title }}</router-link
>
```

- Detail.vue

```html
<template>
  <div>
      <h4>消息ID: {{id}}</h4>
      <h4>消息内容: {{title}} </h4>
  </div>
</template>

<script>
export default {
    name: 'Detail',
    mounted() {
        console.log('route', this.$route);
    },
    props: ['id', 'title']
}
</script>
```
- router/index.js

```js
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
```

{% codetabs %}
@import "t06_a/src/main.js" {title="main.js" code_block=true}
@import "t06_a/src/router/index.js" {title="router/index.js" code_block=true}
@import "t06_a/src/App.vue" {as="html" title="App.vue" code_block=true}
@import "t06_a/src/pages/About.vue"  {as="html" title="pages/About.vue" code_block=true}
@import "t06_a/src/pages/Home/index.vue"  {as="html" title="/pages/Home/index.vue" code_block=true}
@import "t06_a/src/pages/Home/News.vue"  {as="html" title="/pages/Home/News.vue" code_block=true}
@import "t06_a/src/pages/Home/Message/index.vue"  {as="html" title="/pages/Home/Message/index.vue" code_block=true}
@import "t06_a/src/pages/Home/Message/Detail.vue"  {as="html" title="/pages/Home/Message/Detail.vue" code_block=true}
@import "t06_a/src/components/Banner.vue"  {as="html" title="components/Banner.vue" code_block=true}
{% endcodetabs %}

## 编程式路由导航

```js
pushShow(o) {
    this.$router.push({
    name: "detailRouter", // 对象方式只能使用命名路由
    params: {
        id: o.id,
        title: o.title,
    },
    });
},
replaceShow(o) {
    this.$router.replace({
    name: "detailRouter", // 对象方式只能使用命名路由
    params: {
        id: o.id,
        title: o.title,
    },
    });
},
```

- $router.push : 历史信息会增加记录，即增加当前路由为最后一条记录
- $router.replace : 历史信息不会增加记录，替换历史记录中最后一条记录为当前路由
- 不能跳转同一路由页面，否则报错

{% codetabs %}
@import "t07_a/src/main.js" {title="main.js" code_block=true}
@import "t07_a/src/router/index.js" {title="router/index.js" code_block=true}
@import "t07_a/src/App.vue" {as="html" title="App.vue" code_block=true}
@import "t07_a/src/pages/About.vue"  {as="html" title="pages/About.vue" code_block=true}
@import "t07_a/src/pages/Home/index.vue"  {as="html" title="/pages/Home/index.vue" code_block=true}
@import "t07_a/src/pages/Home/News.vue"  {as="html" title="/pages/Home/News.vue" code_block=true}
@import "t07_a/src/pages/Home/Message/index.vue"  {as="html" title="/pages/Home/Message/index.vue" code_block=true}
@import "t07_a/src/pages/Home/Message/Detail.vue"  {as="html" title="/pages/Home/Message/Detail.vue" code_block=true}
@import "t07_a/src/components/Banner.vue"  {as="html" title="components/Banner.vue" code_block=true}
{% endcodetabs %}

## 缓存路由

```html
<!-- include确定要缓存哪个路由 如果不填则缓存所有，名称应为组件名 如果多个改为 :include="['xx','xx']" -->
<keep-alive include="News">  
    <router-view></router-view>
</keep-alive>
```

{% codetabs %}
@import "t08_a/src/main.js" {title="main.js" code_block=true}
@import "t08_a/src/router/index.js" {title="router/index.js" code_block=true}
@import "t08_a/src/App.vue" {as="html" title="App.vue" code_block=true}
@import "t08_a/src/pages/About.vue"  {as="html" title="pages/About.vue" code_block=true}
@import "t08_a/src/pages/Home/index.vue"  {as="html" title="/pages/Home/index.vue" code_block=true}
@import "t08_a/src/pages/Home/News.vue"  {as="html" title="/pages/Home/News.vue" code_block=true}
@import "t08_a/src/pages/Home/Message/index.vue"  {as="html" title="/pages/Home/Message/index.vue" code_block=true}
@import "t08_a/src/pages/Home/Message/Detail.vue"  {as="html" title="/pages/Home/Message/Detail.vue" code_block=true}
@import "t08_a/src/components/Banner.vue"  {as="html" title="components/Banner.vue" code_block=true}
{% endcodetabs %}

## 路由钩子

```js
// 路由组件2个钩子函数， 解决被缓存不能销毁timer问题
activated(){  // News组件出现（激活）
        this.timer = setInterval(() => {
        this.opacity -= 0.01
        if (this.opacity <= 0) this.opacity = 1
    }, 16)
},
deactivated(){  // News组件消失（失活）
    clearInterval(this.timer)  // 这样不影响缓存也可停止timer
}
```

{% codetabs %}
@import "t09_a/src/main.js" {title="main.js" code_block=true}
@import "t09_a/src/router/index.js" {title="router/index.js" code_block=true}
@import "t09_a/src/App.vue" {as="html" title="App.vue" code_block=true}
@import "t09_a/src/pages/About.vue"  {as="html" title="pages/About.vue" code_block=true}
@import "t09_a/src/pages/Home/index.vue"  {as="html" title="/pages/Home/index.vue" code_block=true}
@import "t09_a/src/pages/Home/News.vue"  {as="html" title="/pages/Home/News.vue" code_block=true}
@import "t09_a/src/pages/Home/Message/index.vue"  {as="html" title="/pages/Home/Message/index.vue" code_block=true}
@import "t09_a/src/pages/Home/Message/Detail.vue"  {as="html" title="/pages/Home/Message/Detail.vue" code_block=true}
@import "t09_a/src/components/Banner.vue"  {as="html" title="components/Banner.vue" code_block=true}
{% endcodetabs %}

## 全局前置守卫

```js
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
```

{% codetabs %}
@import "t10_a/src/main.js" {title="main.js" code_block=true}
@import "t10_a/src/router/index.js" {title="router/index.js" code_block=true}
@import "t10_a/src/App.vue" {as="html" title="App.vue" code_block=true}
@import "t10_a/src/pages/About.vue"  {as="html" title="pages/About.vue" code_block=true}
@import "t10_a/src/pages/Home/index.vue"  {as="html" title="/pages/Home/index.vue" code_block=true}
@import "t10_a/src/pages/Home/News.vue"  {as="html" title="/pages/Home/News.vue" code_block=true}
@import "t10_a/src/pages/Home/Message/index.vue"  {as="html" title="/pages/Home/Message/index.vue" code_block=true}
@import "t10_a/src/pages/Home/Message/Detail.vue"  {as="html" title="/pages/Home/Message/Detail.vue" code_block=true}
@import "t10_a/src/components/Banner.vue"  {as="html" title="components/Banner.vue" code_block=true}
{% endcodetabs %}

## 路由元信息

- router/index.js

```js
meta: {
    isAuth: true
},
```

增加后可以在路由守卫中用来做判断

{% codetabs %}
@import "t11_a/src/main.js" {title="main.js" code_block=true}
@import "t11_a/src/router/index.js" {title="router/index.js" code_block=true}
@import "t11_a/src/App.vue" {as="html" title="App.vue" code_block=true}
@import "t11_a/src/pages/About.vue"  {as="html" title="pages/About.vue" code_block=true}
@import "t11_a/src/pages/Home/index.vue"  {as="html" title="/pages/Home/index.vue" code_block=true}
@import "t11_a/src/pages/Home/News.vue"  {as="html" title="/pages/Home/News.vue" code_block=true}
@import "t11_a/src/pages/Home/Message/index.vue"  {as="html" title="/pages/Home/Message/index.vue" code_block=true}
@import "t11_a/src/pages/Home/Message/Detail.vue"  {as="html" title="/pages/Home/Message/Detail.vue" code_block=true}
@import "t11_a/src/components/Banner.vue"  {as="html" title="components/Banner.vue" code_block=true}
{% endcodetabs %}

## 全局后置守卫

```js
// 全局后置路由守卫， 每次路由切之后被调用
router.afterEach((to, from) => {
    document.title = to.meta.title || '权限系统'
})
```

{% codetabs %}
@import "t12_a/src/main.js" {title="main.js" code_block=true}
@import "t12_a/src/router/index.js" {title="router/index.js" code_block=true}
@import "t12_a/src/App.vue" {as="html" title="App.vue" code_block=true}
@import "t12_a/src/pages/About.vue"  {as="html" title="pages/About.vue" code_block=true}
@import "t12_a/src/pages/Home/index.vue"  {as="html" title="/pages/Home/index.vue" code_block=true}
@import "t12_a/src/pages/Home/News.vue"  {as="html" title="/pages/Home/News.vue" code_block=true}
@import "t12_a/src/pages/Home/Message/index.vue"  {as="html" title="/pages/Home/Message/index.vue" code_block=true}
@import "t12_a/src/pages/Home/Message/Detail.vue"  {as="html" title="/pages/Home/Message/Detail.vue" code_block=true}
@import "t12_a/src/components/Banner.vue"  {as="html" title="components/Banner.vue" code_block=true}
{% endcodetabs %}

## 独享路由守卫

```js
{
    path: 'news',
    component: News,
    meta: {
        isAuth: true,
        title: '新闻'
    },
    beforeEnter(to, from, next) {
        if (to.meta.isAuth) { // meta 存储是否需要权限校验
            // 只有为xiaoxue时才放行 news 和 message
            if (localStorage.getItem('school') === 'xiaoxue') next()
            else {
                alert('学校名不正确，无权查看')
            }
        } else {
            next()
        }
    }
},
```

{% codetabs %}
@import "t13_a/src/main.js" {title="main.js" code_block=true}
@import "t13_a/src/router/index.js" {title="router/index.js" code_block=true}
@import "t13_a/src/App.vue" {as="html" title="App.vue" code_block=true}
@import "t13_a/src/pages/About.vue"  {as="html" title="pages/About.vue" code_block=true}
@import "t13_a/src/pages/Home/index.vue"  {as="html" title="/pages/Home/index.vue" code_block=true}
@import "t13_a/src/pages/Home/News.vue"  {as="html" title="/pages/Home/News.vue" code_block=true}
@import "t13_a/src/pages/Home/Message/index.vue"  {as="html" title="/pages/Home/Message/index.vue" code_block=true}
@import "t13_a/src/pages/Home/Message/Detail.vue"  {as="html" title="/pages/Home/Message/Detail.vue" code_block=true}
@import "t13_a/src/components/Banner.vue"  {as="html" title="components/Banner.vue" code_block=true}
{% endcodetabs %}

## 组件内路由守卫

- About.vue

```js
// 通过路由规则，进入组件时调用
beforeRouteEnter (to, from, next) {
    // ...
    console.log('About-beforeRouteEnter');
            if (to.meta.isAuth) { // meta 存储是否需要权限校验
                        // 只有为xiaoxue时才放行 news 和 message
                        if (localStorage.getItem('school') === 'xiaoxue') next()
                        else {
                            alert('学校名不正确，无权查看')
                        }
                    } else {
                        next()
                    }
    next()
},

// 通过路由规则，离开组件时调用
beforeRouteLeave (to, from, next) {
    // ...
    console.log('About-beforeRouteLeave');
    next()

}
```

{% codetabs %}
@import "t14_a/src/main.js" {title="main.js" code_block=true}
@import "t14_a/src/router/index.js" {title="router/index.js" code_block=true}
@import "t14_a/src/App.vue" {as="html" title="App.vue" code_block=true}
@import "t14_a/src/pages/About.vue"  {as="html" title="pages/About.vue" code_block=true}
@import "t14_a/src/pages/Home/index.vue"  {as="html" title="/pages/Home/index.vue" code_block=true}
@import "t14_a/src/pages/Home/News.vue"  {as="html" title="/pages/Home/News.vue" code_block=true}
@import "t14_a/src/pages/Home/Message/index.vue"  {as="html" title="/pages/Home/Message/index.vue" code_block=true}
@import "t14_a/src/pages/Home/Message/Detail.vue"  {as="html" title="/pages/Home/Message/Detail.vue" code_block=true}
@import "t14_a/src/components/Banner.vue"  {as="html" title="components/Banner.vue" code_block=true}
{% endcodetabs %}

## 路由模式

- history: url 参数 不带 #
- hash: url 参数 带 #

```js
const router = new VueRouter({
    mode: 'history',  // 兼容性 hash 模式好些， 否则看后端是否有 history中间件 或用 nginx代理解决
    ...
})
```

{% codetabs %}
@import "t15_a/src/main.js" {title="main.js" code_block=true}
@import "t15_a/src/router/index.js" {title="router/index.js" code_block=true}
@import "t15_a/src/App.vue" {as="html" title="App.vue" code_block=true}
@import "t15_a/src/pages/About.vue"  {as="html" title="pages/About.vue" code_block=true}
@import "t15_a/src/pages/Home/index.vue"  {as="html" title="/pages/Home/index.vue" code_block=true}
@import "t15_a/src/pages/Home/News.vue"  {as="html" title="/pages/Home/News.vue" code_block=true}
@import "t15_a/src/pages/Home/Message/index.vue"  {as="html" title="/pages/Home/Message/index.vue" code_block=true}
@import "t15_a/src/pages/Home/Message/Detail.vue"  {as="html" title="/pages/Home/Message/Detail.vue" code_block=true}
@import "t15_a/src/components/Banner.vue"  {as="html" title="components/Banner.vue" code_block=true}
{% endcodetabs %}