---
title: 隐藏元素方式的优略
date: 2020-05-18
tags:
 - CSS
 - HTML
categories: 
 - CSS
 - HTML
---

# 分析比较 opacity: 0、visibility: hidden、display: none 优劣和适用场景

## display：none

1. DOM结构：浏览器不会渲染display属性为none的元素，不占据空间；
2. 事件监听：无法进行DOM事件监听；不能点击
3. 性能：动态改变此属性是会引起重排，性能较差
4. 继承：不会被子元素继承，不过子元素也不会被渲染
5. transition不支持display，就是消失重新的动画不支持这个属性

## visibility：hidden
1. DOM结构：元素被隐藏，但是会被渲染，不会消失，占据空间
2. 事件监听：无法进行DOM事件监听；不能点击
3. 性能：动态改变此属性会引起重绘，性能较好
4. 继承：会被子元素继承，子元素可以通过设置visibility：visible；来取消隐藏
5. transition：transition支持visibility

## opacity:0
1. DOM结构：透明度为100%，元素隐藏，占据空间；
2. 事件监听：可以进行DOM事件监听：可以被点击
3. 性能：提升到合成层，不会触发重绘，性能较好；
4. 继承：会被子元素继承，且，子元素并不能通过opacity：1来取消隐藏
5. transition:trasiton支持opacity