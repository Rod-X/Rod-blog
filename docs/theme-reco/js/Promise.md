---
title: Promise
date: 2021-05-30
tags:
 - JS
 - 函数
categories: 
 - JS
---

# Promise

## Promise状态
+ pendding/Fulflled/Reject
+ 由pending，转换为Fulfilled或者Rejected，转换后不可再变更
+ 成功了，状态转换会fulfilled，并执行resolve回调
+ 失败了，状态转换会Rejected，并执行reject回调

## 基本使用
```javascript
  const p = new Promise((resolve,reject)=>{
    if(true){
      resolve(100)
    }
    if(false){
      reject()
    }
  })
  p.then((v)=>{
    console.log(v)
  },(err)=>{
    console.log(err)
  })
```

## 常见误区
+ 只使用回调函数，不使用链式调用(形成回调地狱)

## 链式调用
+ 由于promise会返回一个新的promise对象，其值是上一个promise。then中回调函数返回的值
+ 每一次链式会返回，一个新Promise，等状态变更时再执行新p的then方法

## 异常处理
+ 异常一般会被最后的catch()函数收集到，进行异常处理
+ 多个then中如果有一个执行过程中出现了异常，会执行后面的cathc捕获，不好再执行then，

## 最终处理finally
+ finally() 方法返回一个Promise。在promise结束时，无论结果是fulfilled或者是rejected，都会执行指定的回调函数。这为在Promise是否成功完成后都需要执行的代码提供了一种方式。


## 静态方法
+ Promise.resolve()
  - 与new等价
  - 传入promise对象会返回这个promise对象
  - 传入伪promise对象会根据对象的键值创建一个新的promimse对象
```javascript
  Promise.resolve('val') 
  new Promise((resolve)=>{
    resolve('val')
  })
```
+ Promise.reject()

+ Promise.all()
  - 都成功才能返回成功数组，按顺序的
  - 有一个失败则返回失败

+ Promise.race()
  - 一旦迭代器中的某个promise解决或拒绝，返回的 promise就会解决或拒绝。
  - 只返回第一个决绝的

+ Promise.allSettled()
  - 该Promise.allSettled()方法返回一个在所有给定的promise都已经fulfilled或rejected后的promise，并带有一个对象数组，每个对象表示对应的promise结果。
  - 按顺序

