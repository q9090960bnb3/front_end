# 基础

## localStorage 和 sessionStorage

sessionStorage 与 localStorage 类似，也是基于域名来区分存储空间的。这意味着 sessionStorage 同样在同一个域名下共享数据，不受子路径的影响。在 example.com 下的所有页面都能访问和修改同一份 sessionStorage 数据。

然而，sessionStorage 和 localStorage 最主要的区别在于它们的生命周期：

生命周期:

localStorage: 数据持久化存储，即使浏览器关闭或用户重启计算机，数据仍然存在，直到用户主动清除或通过脚本删除。
sessionStorage: 数据存储与会话关联，只要浏览器窗口或标签页保持打开状态，数据就存在。一旦用户关闭了包含 sessionStorage 数据的窗口或标签页，数据就会被自动清除。
用途:

localStorage 适用于需要长期存储数据的场景，比如用户偏好设置、主题选择等。
sessionStorage 更适合临时存储数据，比如表单输入的缓存、购物车信息等，这些数据在用户完成任务后就不需要保留。
数据共享:

对于 localStorage 和 sessionStorage，数据都是在同一个域名下共享的，但 sessionStorage 的数据只在创建它的窗口或标签页以及从该窗口或标签页打开的任何新窗口或标签页之间共享。这意味着，如果用户同时打开了多个独立的窗口，每个窗口的 sessionStorage 都是独立的。
总结来说，sessionStorage 和 localStorage 在数据存储的生命周期上有显著区别，而它们的数据隔离规则则遵循相同的域名原则。

{% codetab %}
@import "t00_a/t00.html" {title: "localStorage"}
@import "t00_a/t01.html" {title: "sessionStorage"}
```txt
```
```txt
```
{% endcodetab %}

## 自定义事件

- CustomEvent 构造函数用于创建自定义事件对象，它接受两个参数：

  - type: 这是一个字符串，表示事件的类型名称。例如，在你的例子中 'myCustomEvent' 就是事件的类型。这是必须的参数。

  - eventInitDict: 这是一个可选的对象字典，可以用来初始化事件的某些特性。它包括以下几个可配置属性：

    - detail: 任何类型的数据，通常用于存储与事件相关的额外信息。例如，你可能想在事件中附带一些数据，如用户ID或操作结果，这些都可以通过 detail 属性传递。

    - bubbles: 布尔值，指定事件是否应该冒泡。默认为 false。如果设置为 true，事件会在DOM树中向上冒泡，直到到达文档根元素。

    - cancelable: 布尔值，指定事件是否可以被取消。默认为 false。如果设置为 true，则可以在事件处理器中调用 preventDefault() 方法来阻止事件的默认行为。

    - composed: 布尔值，指定事件是否应该跨越影子DOM边界传播。默认为 false。如果设置为 true，事件将在影子DOM和其宿主元素之间传播。

{% codetab %}
@import "t01_a/t00.html"
```txt
```
```txt
```
{% endcodetab %}

## 全局事件总线

与自定义事件相似
在原生HTML和JavaScript中实现全局事件总线通常涉及到使用window对象作为事件中心，因为window对象可以被任何脚本访问，这使得它成为实现全局事件总线的一个理想选择。

{% codetab %}
@import "t02_a/t00.html"
```txt
```
```txt
```
{% endcodetab %}

## pubsub 自定义发布订阅

{% codetab %}
@import "t03_a/t00.html"
```txt
```
```txt
```
{% endcodetab %}

