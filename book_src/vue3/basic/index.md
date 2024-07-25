# 基础

## demo

- standard vue3

{% codetab %}
@import "t00_a/src/main.js" {title: "main.js", dbe: true}
@import "t00_a/src/App.vue" {lang: "html", title: "App.vue", dbe: true}
@import "t00_a/src/components/HelloWorld.vue"  {lang: "html", title: "HelloWorld.vue", dbe: true}
{% endcodetab %}

- vite vue3

{% codetab %}
@import "t00_b/src/main.js" {title: "main.js", dbe: true}
@import "t00_b/src/App.vue" {lang: "html", title: "App.vue", dbe: true}
@import "t00_b/src/components/HelloWorld.vue"  {lang: "html", title: "HelloWorld.vue", dbe: true}
{% endcodetab %}

- vite vue3-ts

{% codetab %}
@import "t00_c/src/main.ts" {title: "main.ts", dbe: true}
@import "t00_c/src/App.vue" {lang: "html", title: "App.vue", dbe: true}
@import "t00_c/src/components/HelloWorld.vue"  {lang: "html", title: "HelloWorld.vue", dbe: true}
{% endcodetab %}
** 因为 vite 启动速度快，所有后面示例均用 vite js 版本

## setup 返回对象

{% codetab %}
@import "t01_b/src/main.js" {title: "main.js", dbe: true}
@import "t01_b/src/App.vue" {lang: "html", title: "App.vue", dbe: true}
{% endcodetab %}
## setup 返回渲染函数

{% codetab %}
@import "t02_b/src/main.js" {title: "main.js", dbe: true}
@import "t02_b/src/App.vue" {lang: "html", title: "App.vue", dbe: true}
{% endcodetab %}
## vue2 和 3 不要混用

- vue3 调用 vue2 失败

{% codetab %}
@import "t03_b/src/main.js" {title: "main.js", dbe: true}
@import "t03_b/src/App.vue" {lang: "html", title: "App.vue", dbe: true}
{% endcodetab %}
## ref 响应数据

{% codetab %}
@import "t04_b/src/main.js" {title: "main.js", dbe: true}
@import "t04_b/src/App.vue" {lang: "html", title: "App.vue", dbe: true}
{% endcodetab %}
## reactive 响应数据

- reactive 可以传数组或对象，转换为proxy 对象，可以直接对属性修改

{% codetab %}
@import "t05_b/src/main.js" {title: "main.js", dbe: true}
@import "t05_b/src/App.vue" {lang: "html", title: "App.vue", dbe: true}
{% endcodetab %}
## reactive 作用对象

{% codetab %}
@import "t06_b/src/main.js" {title: "main.js", dbe: true}
@import "t06_b/src/App.vue" {lang: "html", title: "App.vue", dbe: true}
{% endcodetab %}
## vue3响应式原理

```js
let p = new Proxy(person, {
    // 读取时调用
    get(target, propName){
        console.log(`有人读取了${propName}属性`);
        return Reflect.get(target, propName)
    },
    // 修改和增加都会调用
    set(target, propName, value){
        console.log(`有人修改了${propName}属性，原属性${target[propName]}, 修改后属性${value}`);
        // target[propName] = value
        Reflect.set(target, propName, value)
    },
    // 有人删除时调用
    defineProperty(target, propName){
        console.log(`有人删除了${propName}属性`);
        // return delete target[propName]
        return Reflect.deleteProperty(target, propName)
    }
})
```
## 注意事项

- props 未声明，外部如果又传入了，会传入到 context.attr
- v3自定义事件不声明接收会有警告
 
{% codetab -%}
@import "t07_b/src/main.js" {title: "main.js", dbe: true}
@import "t07_b/src/App.vue" {lang: "html", title: "App.vue", dbe: true}
@import "t07_b/src/components/Demo.vue"  {lang: "html", title: "Demo.vue", dbe: true}
{%- endcodetab %}
## computed 计算属性

{% codetab %}
@import "t08_b/src/main.js" {title: "main.js", dbe: true}
@import "t08_b/src/App.vue" {lang: "html", title: "App.vue", dbe: true}
@import "t08_b/src/components/Demo.vue"  {lang: "html", title: "Demo.vue", dbe: true}
{% endcodetab %}
## watch 监视 ref

{% codetab %}`
@import "t09_b/src/main.js" {title: "main.js", dbe: true}
@import "t09_b/src/App.vue" {lang: "html", title: "App.vue", dbe: true}
@import "t09_b/src/components/Demo.vue"  {lang: "html", title: "Demo.vue", dbe: true}
{% endcodetab %}
## watch 监视 reactive

{% codetab %}
@import "t10_b/src/main.js" {title: "main.js", dbe: true}
@import "t10_b/src/App.vue" {lang: "html", title: "App.vue", dbe: true}
@import "t10_b/src/components/Demo.vue"  {lang: "html", title: "Demo.vue", dbe: true}
{% endcodetab %}
## watchEffect

- 用什么就监视什么
  
{% codetab %}
@import "t11_b/src/main.js" {title: "main.js", dbe: true}
@import "t11_b/src/App.vue" {lang: "html", title: "App.vue", dbe: true}
@import "t11_b/src/components/Demo.vue"  {lang: "html", title: "Demo.vue", dbe: true}
{% endcodetab %}
## 生命周期

{% codetab %}
@import "t12_b/src/main.js" {title: "main.js", dbe: true}
@import "t12_b/src/App.vue" {lang: "html", title: "App.vue", dbe: true}
@import "t12_b/src/components/Demo.vue"  {lang: "html", title: "Demo.vue", dbe: true}
{% endcodetab %}
## toRefs

- 分离属性

{% codetab %}
@import "t13_b/src/main.js" {title: "main.js", dbe: true}
@import "t13_b/src/App.vue" {lang: "html", title: "App.vue", dbe: true}
@import "t13_b/src/components/Demo.vue"  {lang: "html", title: "Demo.vue", dbe: true}
{% endcodetab %}
## shallow

- shallowReactive 只监控对象第一层数据响应式
- shallowRef 只对引用本身进行响应式处理，但不会深入到对象或数组的内部属性。也就是说，如果你使用 shallowRef 包装一个对象或数组，那么只有当这个对象或数组的引用发生变化时，才会触发依赖这个 shallowRef 的组件的更新。但是，对象或数组内部属性的变化不会触发更新。

{% codetab %}
@import "t14_b/src/main.js" {title: "main.js", dbe: true}
@import "t14_b/src/App.vue" {lang: "html", title: "App.vue", dbe: true}
@import "t14_b/src/components/Demo.vue"  {lang: "html", title: "Demo.vue", dbe: true}
{% endcodetab %}
## readonly 和 shallowReadonly

- readonly 对象不能修改

- shallowReadonly 对象第一层不能修改

{% codetab %}
@import "t15_b/src/main.js" {title: "main.js", dbe: true}
@import "t15_b/src/App.vue" {lang: "html", title: "App.vue", dbe: true}
@import "t15_b/src/components/Demo.vue"  {lang: "html", title: "Demo.vue", dbe: true}
{% endcodetab %}
## toRaw 和 markRaw

- toRaw 返回原始对象

- markRaw 不让对象被代理,即对象不被响应式

{% codetab %}
@import "t16_b/src/main.js" {title: "main.js", dbe: true}
@import "t16_b/src/App.vue" {lang: "html", title: "App.vue", dbe: true}
@import "t16_b/src/components/Demo.vue"  {lang: "html", title: "Demo.vue", dbe: true}
{% endcodetab %}
## 自定义ref

{% codetab %}
@import "t17_b/src/main.js" {title: "main.js", dbe: true}
@import "t17_b/src/App.vue" {lang: "html", title: "App.vue", dbe: true}
{% endcodetab %}
## provide 和 inject 数据传递

provide 和 inject 在 Vue.js 中主要用于组件间通信，特别是当需要跨越多个组件层级进行数据传递时。它们提供了一种无需通过中间组件手动传递 props 的方式，可以将数据从一个祖先组件传递到其所有后代组件中，无论这些后代组件有多深。

{% codetab %}
@import "t18_b/src/main.js" {title: "main.js", dbe: true}
@import "t18_b/src/App.vue" {lang: "html", title: "App.vue", dbe: true}
@import "t18_b/src/components/Child.vue"  {lang: "html", title: "Child.vue", dbe: true}
@import "t18_b/src/components/Gradson.vue"  {lang: "html", title: "Gradson.vue", dbe: true}
{% endcodetab %}
## 响应式数据判断

{% codetab %}
@import "t19_b/src/main.js" {title: "main.js", dbe: true}
@import "t19_b/src/App.vue" {lang: "html", title: "App.vue", dbe: true}
{% endcodetab %}
## 无根标签

vue中不用写根标签了

```html
<template>
  <!-- 无需根标签，因为底层外部渲染了 fragment 标签，打包完后又被去除  -->
  <h3>hello1</h3>
  <h3>hello2</h3>
  <h3>hello3</h3>
</template>
```

## 原始弹窗

{% codetab %}
@import "t20_b/src/main.js" {title: "main.js", dbe: true}
@import "t20_b/src/App.vue" {lang: "html", title: "App.vue", dbe: true}
@import "t20_b/src/components/Child.vue"  {lang: "html", title: "Child.vue", dbe: true}
@import "t20_b/src/components/Gradson.vue"  {lang: "html", title: "Gradson.vue", dbe: true}
@import "t20_b/src/components/Dialog.vue"  {lang: "html", title: "Dialog.vue", dbe: true}
{% endcodetab %}
## teleport

`Teleport` 是 Vue 3 引入的一个内置组件，它的主要作用是将一个组件的渲染结果“传送”到 DOM 树的其他位置，而不仅仅是它在组件树中的位置。这在很多场景下非常有用，尤其是当需要将模态框、弹出菜单、提示框或其他 UI 元素放置在文档的特定位置时。

{% codetab %}
@import "t21_b/src/main.js" {title: "main.js", dbe: true}
@import "t21_b/src/App.vue" {lang: "html", title: "App.vue", dbe: true}
@import "t21_b/src/components/Child.vue"  {lang: "html", title: "Child.vue", dbe: true}
@import "t21_b/src/components/Gradson.vue"  {lang: "html", title: "Gradson.vue", dbe: true}
@import "t21_b/src/components/Dialog.vue"  {lang: "html", title: "Dialog.vue", dbe: true}
{% endcodetab %}
## 异步加载 和 suspense

{% codetab %}
@import "t22_b/src/main.js" {title: "main.js", dbe: true}
@import "t22_b/src/App.vue" {lang: "html", title: "App.vue", dbe: true}
@import "t22_b/src/components/Child.vue"  {lang: "html", title: "Child.vue", dbe: true}
@import "t22_b/src/components/Child2.vue"  {lang: "html", title: "Child2.vue", dbe: true}
@import "t22_b/src/components/Child3.vue"  {lang: "html", title: "Child3.vue", dbe: true}
{% endcodetab %}