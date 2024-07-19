# 字体属性

## 字体复合属性

```css
body {
  font: font-style font-weight font-size/line-height font-family;
}
```

- 上面必须按照顺序书写

- 不需要的属性可省略（使用默认值) 但必须要留 font-size 和 font-family 属性，否则 font 属性不起作用

## 文本属性

### 文本颜色

```css
div {
  color: #ff00ff;
}
```

### 对齐文本

```css
/* 水平对齐 */
div {
  /* center:水平居中 left:左对齐（default） right：右对齐 */
  text-align: center;
}
```

### 装饰文本

```css
div {
  /* none:默认（无装饰线，可用来取消a标签的下划线） underline：下划线 overline：上划线 line-through 删除线 */
  text-decoration: none;
}
```

### 文本缩进

```css
div {
  /* text-indent: 10px; */
  /* em: 相对于一个文字的距离 */
  text-indent: 2em;
}
```

### 行间距

```css
/* 行高就是行间距 */
div {
  line-height: 26px;
}
```
