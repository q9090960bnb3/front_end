# css

## css 的三大特征

### 层叠性

相同选择器样式冲突，采用就近原则

### 继承性

子元素可以继承父元素样式(text- font- line- 这些元素开头可以继承，及 color 属性)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      body {
        color: pink;

        /* font: 12px/24px 'Microsoft YaHei'; */

        /* 1.5可以不带单位，表示行高为该文字的1.5倍 */
        font: 12px/1.5 'Microsoft YaHei';
      }
      div {
        font-size: 14px;
      }
    </style>
  </head>
  <body>
    <div>粉红色回忆1</div>
    <p>粉红色回忆2</p>
    <ul>
      <li>我没有指定文字大小</li>
    </ul>
  </body>
</html>
```

### 优先级

| 选择器  |  权重  |
|---|---|
| `继承`或者`*`  | 0,0,0,0 |
| 元素选择器 | 0,0,0,1 |
| 类选择器，伪类选择器 | 0,0,1,0 |
| id选择器 | 0,1,0,0 |
| 行内样式 style="" | 1,0,0,0 |
| !important | = 无穷大 |

- 复合选择器有权重叠加问题

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      /* 权重能叠加但是不会进位 */
      /* 复合选择器权重叠加 0,0,0,1 + 0,0,0,1 = 0,0,0,2 */
      ul li {
        color: green;
      }

      /* li 权重 为 0,0,0,1 */
      li {
        color: red;
      }

      /* 类选择器 0,0,1,0 + 元素选择器 0,0,0,1 = 0,0,1,1 */
      .nav li {
        color: pink;
      }
    </style>
  </head>
  <body>
    <ul class="nav">
      <li>大猪蹄子</li>
      <li>大肘子</li>
      <li>猪尾巴</li>
    </ul>
  </body>
</html>
```