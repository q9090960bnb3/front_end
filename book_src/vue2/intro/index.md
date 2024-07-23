# 引入

## 基础示例

{% codetab %}
@import "t00_a/src/main.js" {title: "main.js"}
@import "t00_a/src/App.vue" {lang: "html", title: "App.vue"}
@import "t00_a/src/components/School.vue"  {lang: "html", title: "School.vue"}
```txt
```
{% endcodetab %}

## ref属性

{% codetab %}
@import "t01_a/src/main.js" {title: "main.js"}
@import "t01_a/src/App.vue" {lang: "html", title: "App.vue"}
@import "t01_a/src/components/School.vue"  {lang: "html", title: "School.vue"}
```txt
```
{% endcodetab %}

## props配置

- `:` 属性带冒号，必须传入指定类型，否则抛出错误

{% codetab %}
@import "t02_a/src/main.js" {title: "main.js"}
@import "t02_a/src/App.vue" {lang: "html", title: "App.vue"}
@import "t02_a/src/components/Student.vue"  {lang: "html", title: "Student.vue"}
```txt
```
{% endcodetab %}

## 混合，共享配置

{% codetab %}
@import "t03_a/src/main.js" {title: "main.js"}
@import "t03_a/src/mixin.js" {title: "mixin.js"}
@import "t03_a/src/App.vue" {lang: "html", title: "App.vue"}
@import "t03_a/src/components/Student.vue"  {lang: "html", title: "Student.vue"}
@import "t03_a/src/components/School.vue"  {lang: "html", title: "School.vue"}
```txt
```
{% endcodetab %}

## 插件

{% codetab %}
@import "t04_a/src/plugins.js" {title: "plugins.js"}
@import "t04_a/src/main.js" {title: "main.js"}
@import "t04_a/src/App.vue" {lang: "html", title: "App.vue"}
```txt
```
{% endcodetab %}

## scoped 限制

- 限制样式为当前组件使用
- 此示例使用 less 来混入样式，需 `pnpm i -D less less-loader` 来安装依赖

{% codetab %}
@import "t05_a/src/main.js" {title: "main.js"}
@import "t05_a/src/App.vue" {lang: "html", title: "App.vue"}
@import "t05_a/src/components/Student.vue"  {lang: "html", title: "Student.vue"}
@import "t05_a/src/components/School.vue"  {lang: "html", title: "School.vue"}
```txt
```
{% endcodetab %}

## 自定义事件

{% codetab %}
@import "t06_a/src/main.js" {title: "main.js"}
@import "t06_a/src/App.vue" {lang: "html", title: "App.vue"}
@import "t06_a/src/components/Student.vue"  {lang: "html", title: "Student.vue"}
@import "t06_a/src/components/School.vue"  {lang: "html", title: "School.vue"}
```txt
```
{% endcodetab %}

## 使用发布订阅

```sh
pnpm install pubsub-js
```

{% codetab %}
@import "t07_a/src/main.js" {title: "main.js"}
@import "t07_a/src/App.vue" {lang: "html", title: "App.vue"}
@import "t07_a/src/components/Student.vue"  {lang: "html", title: "Student.vue"}
@import "t07_a/src/components/School.vue"  {lang: "html", title: "School.vue"}
```txt
```
{% endcodetab %}

## 动画

.v-enter-active 类是 Vue.js 在使用 <transition> 组件时默认创建的 CSS 类之一。当你在 Vue.js 中使用 <transition> 组件并应用 CSS 过渡或动画时，Vue 会自动在适当的时机添加和移除一组预定义的 CSS 类。

具体来说，当你使用 <transition> 组件时，以下是一些默认的 CSS 类：

.v-enter: 应用于元素在进入过渡开始时。
.v-enter-active: 应用于整个进入过渡过程中，可以用来定义过渡的持续时间、延时和曲线函数。
.v-enter-to: 应用于元素在进入过渡结束时。
.v-leave: 应用于元素在离开过渡开始时。
.v-leave-active: 应用于整个离开过渡过程中。
.v-leave-to: 应用于元素在离开过渡结束时。
这些类名的前缀 v- 可以通过 <transition> 组件的 name 属性来改变。例如，如果 <transition> 组件使用了 name="slide"，那么类名将变为 slide-enter, slide-enter-active, slide-enter-to, slide-leave, slide-leave-active, slide-leave-to。

{% codetab %}
@import "t08_a/src/main.js" {title: "main.js"}
@import "t08_a/src/App.vue" {lang: "html", title: "App.vue"}
@import "t08_a/src/components/Test.vue"  {lang: "html", title: "Student.vue"}
@import "t08_a/src/components/Test2.vue"  {lang: "html", title: "School.vue"}
@import "t08_a/src/components/Test3.vue"  {lang: "html", title: "School.vue"}
@import "t08_a/src/components/Test4.vue"  {lang: "html", title: "School.vue"}
```txt
```
{% endcodetab %}

## 跨域问题

- 开启代理服务器

{% codetab %}
```js {title: "单个代理服务器"}
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // 开启代理服务器, 方式一
  devServer: {
    proxy: 'http://localhost:5000'
  }
})
```
@import "t09_a/vue.config.js" {title: "多个代理服务器"}
```txt
```
```txt
```
{% endcodetab %}

- 服务端示例

{% codetab %}
@import "t09_a/server1.js"
@import "t09_a/server2.js"
```txt
```
{% endcodetab %}

- 客户端示例

{% codetab %}
@import "t09_a/src/main.js" {title: "main.js"}
@import "t09_a/src/App.vue" {lang: "html", title: "App.vue"}
```txt
```
{% endcodetab %}

## 插槽

{% codetab %}
@import "t10_a/src/main.js" {title: "main.js"}
@import "t10_a/src/App.vue" {lang: "html", title: "App.vue"}
@import "t10_a/src/components/ZoneCategory.vue"  {lang: "html", title: "ZoneCategory.vue"}
@import "t10_a/src/components/SlotNameCategory.vue"  {lang: "html", title: "SlotNameCategory.vue"}
@import "t10_a/src/components/SlotCategory.vue"  {lang: "html", title: "SlotCategory.vue"}
@import "t10_a/src/components/Category.vue"  {lang: "html", title: "School.vue"}
```txt
```
{% endcodetab %}