# vue2 学习

## Demo

{% codetabs %}
@import "t00_a/test.html" {code_block=true}
{% endcodetabs %}

## 初识

<mytab>
{% codetabs %}
@import "t01_a/test.html" {code_block=true}
{% endcodetabs %}
</mytab>

## vue 模板语法

{% codetabs %}
@import "t02_a/test.html" {code_block=true}
{% endcodetabs %}

## 数据绑定

{% codetabs %}

@import "t03_a/test.html" {code_block=true}\
{% endcodetabs %}

## el与data两种写法

{% codetabs %}

@import "t04_a/test.html" {code_block=true title="el两种写法"}
@import "t04_a/test02.html" {code_block=true title="data两种写法"}
{% endcodetabs %}

## MVVM模型

{% codetabs %}
@import "t05_a/test.html" {code_block=true}
{% endcodetabs %}

## 事件处理

{% codetabs %}

@import "t06_a/test.html" {code_block=true title="事件基本使用"}
@import "t06_a/test02.html" {code_block=true title="事件修饰符"}
@import "t06_a/test03.html" {code_block=true title="键盘事件"}
{% endcodetabs %}

## 计算属性

{% codetabs %}

@import "t07_a/test01.html" {code_block=true title="插值语法实现"}
@import "t07_a/test02.html" {code_block=true title="method实现"}
@import "t07_a/test03.html" {code_block=true title="计算属性实现"}
@import "t07_a/test04.html" {code_block=true title="计算属性实现(简写)"}
{% endcodetabs %}

## 监视属性

{% codetabs %}

@import "t08_a/test01.html" {code_block=true title="天气案例"}
@import "t08_a/test02.html" {code_block=true title="监视属性方式一"}
@import "t08_a/test03.html" {code_block=true title="监视属性方式二"}
@import "t08_a/test04.html" {code_block=true title="深度监视多级结构"}
@import "t08_a/test05.html" {code_block=true title="深度监视所有子结构"}
@import "t08_a/test06.html" {code_block=true title="深度监视简写"}
@import "t08_a/test07.html" {code_block=true title="姓名案例"}
{% endcodetabs %}

## 类型绑定

{% codetabs %}

@import "t09_a/test01.html" {code_block=true title="绑定样式-class"}
@import "t09_a/test02.html" {code_block=true title="绑定样式-style"}
{% endcodetabs %}

## 条件渲染

{% codetabs %}

@import "t10_a/test01.html" {code_block=true}
{% endcodetabs %}

## 列表渲染

<codetabs>
{% codetabs %}
@import "t11_a/test01.html" {code_block=true title="基础示例"}
@import "t11_a/test02.html" {code_block=true title="key原理"}
@import "t11_a/test03.html" {code_block=true title="列表过滤-watch方式"}
@import "t11_a/test04.html" {code_block=true title="列表过滤-computed方式"}
@import "t11_a/test05.html" {code_block=true title="列表排序"}
@import "t11_a/test06.html" {code_block=true title="更新时的一个问题"}
@import "t11_a/test07.html" {code_block=true title="vueset使用"}
@import "t11_a/test08.html" {code_block=true title="模拟数据监测"}
{% endcodetabs %}
</codetabs>

## 收集表单数据

<codetabs>
{% codetabs %}

@import "t12_a/test01.html" {code_block=true}
{% endcodetabs %}
</codetabs>



## 过滤器

<codetabs>
{% codetabs %}

@import "t13_a/test01.html" {code_block=true}
{% endcodetabs %}
</codetabs>

## 内置指令

{% codetabs %}
@import "t14_a/test01.html" {code_block=true title="v-text"}
@import "t14_a/test02.html" {code_block=true title="v-html"}
@import "t14_a/test03.html" {code_block=true title="v-cloak"}
@import "t14_a/test04.html" {code_block=true title="v-once"}
@import "t14_a/test05.html" {code_block=true title="v-pre"}
{% endcodetabs %}

## 自定义指令

{% codetabs %}

@import "t15_a/test01.html" {code_block=true}
{% endcodetabs %}

## 生命周期

{% codetabs %}
@import "t16_a/test01.html" {code_block=true title="引出-mount"}
@import "t16_a/test02.html" {code_block=true title="不使用生命周期"}
@import "t16_a/test03.html" {code_block=true title="分析"}
@import "t16_a/test04.html" {code_block=true title="总结"}
{% endcodetabs %}

## 非单文件组件

{% codetabs %}

@import "t17_a/test01.html" {code_block=true title="准备"}
@import "t17_a/test02.html" {code_block=true title="基本使用"}
@import "t17_a/test03.html" {code_block=true title="组件嵌套"}
@import "t17_a/test04.html" {code_block=true title="vuecomponent"}
@import "t17_a/test05.html" {code_block=true title="内置关系"}
{% endcodetabs %}

## 单文件组件

{% codetabs %}

@import "t18_a/index.html" {code_block=true tabname="file"}
@import "t18_a/main.js" {code_block=true tabname="file"}
@import "t18_a/App.vue" {as="html" code_block=true tabname="file"}
@import "t18_a/School.vue" {as="html" code_block=true tabname="file"}
@import "t18_a/Student.vue" {as="html" code_block=true tabname="file"}
{% endcodetabs %}
