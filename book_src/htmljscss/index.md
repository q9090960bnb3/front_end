# 原生html

## emmet 语法

```html
<!-- div tab直接生成 -->
<div></div>

<!-- div*3 生成3个div标签 -->
<div></div>
<div></div>
<div></div>

<!-- ul>li*3 父子 -->
<ul>
    <li></li>
    <li></li>
    <li></li>
</ul>

<!-- div + p 生成兄弟标签 -->
<div></div>
<p></p>

<!-- div.xxx div带类名 -->
<div class="nav"></div>

<!-- span#xxx  span带id -->
<span id="123"></span>

<!-- 生成5个类名带顺序的div: div.class$*5 -->
<div class="class1"></div>
<div class="class2"></div>
<div class="class3"></div>
<div class="class4"></div>
<div class="class5"></div>

<!-- 生成的标签默认带内容 div{xxx}*2 -->
<div>xxx</div>
<div>xxx</div>
```