# 常用指令

## 单项数据绑定

- model 到 view 的数据单项绑定

```html
<input type="text" v-bind:value="name"><br/>
<!-- 简写 -->
<input type="text" :value="name"><br/>
```

## 双向数据绑定

```html
<input type="text" v-model:value="name"><br/>
<!-- 简写 -->
<input type="text" v-model="name"><br/>
```

## 事件处理

```html
<button v-on:click="showInfo">点击提示信息</button><br>
<button @click="showInfo">点击提示信息</button><br>
```

## 条件指令

```html
<!-- 使用v-show 条件渲染 -->
<h2 v-show="true">欢迎来到{{name}}</h2>

<!-- v-if v-else-if v-else 渲染 -->
<div v-if="n==1">Angular</div>
<div v-else-if="n==2">React</div>
<div v-else-if="n==3">Vue</div>
<div v-else>hh</div>
```

## 内置指令

```html
<!-- 所有的解析并替换，显示的是原始值，不会解析标签 -->
<div v-text="name"></div>

<!-- 会解析标签 -->
<div v-html="str"></div>

<!-- v-cloak Vue成功加载后对应标签消失，配合style来解决模板渲染造成的异常问题 -->
<div v-cloak id="root">
{{name}}
</div>

<!-- v-once 初始才渲染一次 -->
<h3 v-once>初始化的n值是：{{n}}</h3>

<!--  v-pre 不回去解析模板，加快编译速度 -->
<h3 v-pre>hello</h3>
<h3 v-pre>当前n的值是:{{n}}</h3>
```