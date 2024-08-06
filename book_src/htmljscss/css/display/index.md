# 元素显示

## 元素的显示模式

一般分为快元素和行内元素 2 种类型

- 块元素

  1.独占一行 2.高度、宽度、内外边距可以控制 3.宽度继承父级 4.是一个盒子，里面可以放行内或块级元素

- 行内元素

  1.相邻行内元素在一行上，可以显示多个 2.高宽直接设置是无效的 3.默认宽度就是本身宽度 4.只能容纳文本或其他行内元素

  a 元素是特殊行内元素，里面可以包含块元素，但是给 a 转换为块级模式最安全

- 行内块元素

   1. 1行可以有多个行内块元素，他们之间会有空白缝隙
   2. 默认宽度是自身宽度
   3. 高度、行高、内外边距都可以控制
   
    eg: `<img /> <input /> <td></td>` 等同时具备块元素和行内元素的特点 

| 元素模式 | 元素排列 | 设置样式 | 默认宽度 | 包含 |
| --- | --- | --- | --- | --- |
| 块元素 | 一行只能放一个块元素 | 可以设置宽度高度 | 容器100% | 可以包含任何标签 |
| 行内元素 | 同一行可以放多个行内元素 | 不能直接设置宽高 | 本身内容宽度 | 包含文本或其他行内元素， `<a />` 元素是特殊行内元素，里面可以包含块元素，但是给 `<a />` 转换为块级模式最安全 |

### 各元素示例

{% codetabs %}
@import "tBlock.html" {title="块元素"}
@import "tInline.html" {title="块元素"}
@import "tInline_block.html" {title="块元素"}
{% endcodetabs %}

### 显示模式转换

{% codetabs %}
@import "t00.html"
{% endcodetabs %}

## 背景

 背景颜色

```css
div {
  /* 透明 */
  /* background-color: transparent; */
  background-color: #fff;
}
```

- 背景图片

```css
div {
  background-image: none | url(url);
  /* 默认图片平铺 */
}
```

- 背景平铺

```css
div {
  /* 图片平铺模式 */
  /* background-repeat: no-repeat; 设置不平铺 */
  /* 图片平铺模式其他 */
  background-repeat: repeat-x;
  background-repeat: repeat-y;
  background-repeat: repeat;
  background-repeat: space;
  background-repeat: round;
  background-repeat: no-repeat;
}
```

- 背景图片位置

```css
div {
  /* Keyword values */
  background-position: top;
  background-position: bottom;
  background-position: left;
  background-position: right;
  background-position: center;

  /* <percentage> values */
  background-position: 25% 75%;

  /* <length> values */
  background-position: 0 0;
  background-position: 1cm 2cm;
  background-position: 10ch 8em;

  /* Multiple images */
  background-position: 0 0, center;

  /* Edge offsets values */
  background-position: bottom 10px right 20px;
  background-position: right 3em bottom 10px;
  background-position: bottom 10px right;
  background-position: top right 10px;

  /* Global values */
  background-position: inherit;
  background-position: initial;
  background-position: revert;
  background-position: revert-layer;
  background-position: unset;
}
```

{% codetabs %}
@import "t01.html"
{% endcodetabs %}

- 背景图片固定

```css
div {
  background-attachment: scroll;
  background-attachment: fixed;
  background-attachment: local;
}
```

{% codetabs %}
@import "t02.html"
{% endcodetabs %}

- 合并

```css
div {
  /* 简写方式顺序没有强制要球 */
  background: 背景颜色 背景图片地址 背景平铺 背景图片滚动 背景图片位置;
}
```

{% codetabs %}
@import "t03.html"
{% endcodetabs %}

- 背景色半透明写法

```css
div {
  background: rgba(0, 0, 0, 0.3);
}
```

