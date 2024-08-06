# 选择器

{% codetabs %}
@import "t00.html" {title="后代选择器"}
@import "t01.html" {title="子选择器"}
@import "t02.html" {title="并集选择器"}
```css {title="链接伪类选择器"}
a:link  /* 选择所有未被访问的链接 */
a:visited  /* 选择所有被访问的链接 */
a:hover  /* 选择鼠标位于其上链接 */
a:active  /* 选择活动链接（鼠标按下未弹起） */
```
```css {title="focus伪类选择器"}
/* 选取获得焦点的表单元素 */
input:focus {
  background-color: yellow;
}
```
{% endcodetabs %}