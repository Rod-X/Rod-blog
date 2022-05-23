---
title: BFC 及其应用
date: 2020-05-18
tags:
 - CSS
 - HTML
 - BFC
categories: 
 - CSS
 - HTML
---

# BFC 及其应用
## 是什么：
BFC全称：Block Formatting Context ，中文块级格式化上下文

官方解释：BFC决定了元素如何对其内容进行定位，以及与其他元素的关系和相互作用，当设计到可视化布局时，BFC提供了一个环境，HTMl在这个环境中按一定规则进行布局

简单说：BFC提供了一个完全独立的布局环境，让空间内的子元素不会影响到外面的布局。也就是可以看做css属性吧

## 怎么触发：
```css
overflow:hidden;
display:inline-block;
position:absolute;
display:table-cell;
display:flex
```

+ 常用有flex布局，行内块布局，绝对定位

## 特性：
+ BFC是一个块级元素。块级元素会在垂直方向一个接一个排列
+ BFC是页面中一个隔离独立的容器，容器里面的标签不受外部标签影响
+ 垂直方向的距离由margin决定，属于同一个BFC的两个相邻的标签外边距会发生重叠
+ 计算BFC高度时，浮动元素也参与计算

## 解决了什么

1. 使用Float脱离文档流，父元素高度塌陷。（上面最后一条）
2. margin时上下边距重叠
3. 两栏布局


