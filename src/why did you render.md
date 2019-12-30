# why did you render

> 就是监听component不必要的render，在控制台打印出来。


很多人推荐另一个库：why-did-you-update, github: https://github.com/maicki/why-did-you-update

两个库对比：

why-did-you-update Star 3.9K  
why-did-you-render Star 1.6K


## Setup

```shell
npm install @welldone-software/why-did-you-render --save
```

## Installation

```js
import React from 'react';

if (process.env.NODE_ENV !== 'production') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React);
}
```

## Usage

在你想监听的component里添加一个标签。

在 class component 上：

```js
class Demo extends React.Component {
  static whyDidYouRender = true
  render(){
    return (
      //some heavy render you want to ensure doesn't happen if its not neceserry
    )
  }
}
```

在 function component 上：

```js
const Demo = props => (
  <div>
    //some heavy component you want to ensure doesn't happen if its not neceserry
  </div>
)
Demo.defaultProps = {
  whyDidYouRender: true
};
```


Track Redundant React Hooks Re-Renders With “Why Did You Render” Version 3
https://medium.com/welldone-software/track-redundant-re-renders-that-caused-by-hooks-with-why-did-you-render-version-3-504468deb653


## API



## Demo  



## run

shouldComponentUpdate 的处理更新   

值相等的不同对象  

props和state的更新，带有下面内存地址引用类型。  
关于array object function，内存地址。  


## React的性能优化

检查Render次数，不必要的就拦截。  
异步加载、友好处理。    
计算和函数记忆。  
组件的设计和管理。  


(21) ["1. 使用纯组件", "2. 使用 React.memo 进行组件记忆", "3. 使用 shouldComponentUpdate 生命周期事件", "4. 懒加载组件", "5. 使用 React Fragments 避免额外标记", "6. 不要使用内联函数定义", "7. 避免 componentWillMount() 中的异步请求", "8. 在 Constructor 的早期绑定函数", "9. 箭头函数与构造函数中的绑定", "10. 避免使用内联样式属性", "11. 优化 React 中的条件渲染", "12. 不要在 render 方法中导出数据", "13. 为组件创建错误边界", "14. 组件的不可变数据结构", "15. 使用唯一键迭代", "16. 事件节流和防抖", "17. 使用 CDN", "18. 用 CSS 动画代替 JavaScript 动画", "19. 在 Web 服务器上启用 gzip 压缩", "20. 使用 Web Workers 处理 CPU 密集任务", "21. React 组件的服务端渲染"]

## 关于React.lazy

使用了React.lazy去import组件的话，会单独成为一个js文件。
Suspense这是用来等这个文件做loading的处理。
这两个货是捆绑的，必须一起配对使用。  


main.[hash].chunk.js： 这是你的 应用程序 代码。 App.js 等
2.[hash].chunk.js： 这是 vendor(第三方库) 的代码
runtime-main.[hash].js： 这是 webpack runtime(运行时) 逻辑 chunk ，用于加载和运行你的应用程序

React.lazy会单独生成个 [number].[hash].chunk.js

runtime-main.[hash].js,默认情况下，此内容将嵌入 build/index.html 文件中以保存其他网络请求。你可以通过指定我们的 高级配置 中记录的INLINE_RUNTIME_CHUNK=false 来选择不这样做，这将加载此 chunk 而不是将其嵌入 index.html 。


Analyzing the Bundle Size:  

```
npm install --save source-map-explorer
"analyze": "source-map-explorer 'build/static/js/*.js'",
```

第三方包这么拆分？？？


## 其它 

react-controlled-components  
Invalid Hook Call Warning

?react_perf


## 参考

[21个让React 开发更高效更有趣的工具](https://juejin.im/post/5d50a99cf265da03e61b0271)  
[React高效渲染策略](https://github.com/fi3ework/blog/issues/15)  
[21 个 React 性能优化技巧](https://www.infoq.cn/article/KVE8xtRs-uPphptq5LUz)  
[Optimizing Performance](https://zh-hans.reactjs.org/docs/optimizing-performance.html#use-the-production-build)  
[React 性能优化](https://juejin.im/post/5c8b71566fb9a049dc0324cc)  
[React 开发必须知道的 34 个技巧](https://juejin.im/post/5dcb5a80e51d4520db19b906)  
[]()  
[]()  


## meeting list & code review

React 是关注数据，数据流行为的框架。  

命名规则

Redux 命名应该能看得懂 
Redux 写法规范 

不管是常量和变量  

TypeScript规范key  接口

看网上的React Redux的代码标准  
怎么才是最佳实现  

Redux saga 该有代码清晰流程    
同步去实现异步情况  

代码应该分工清晰，单一指责  

代码标准，标记
看代码命名就知道怎么找  
而不是想代码后面的逻辑再去找 

数据 状态 行为 可以分开
比如请求管理和loading

{
  data: 
  isLoading: 
  isLoaded:  
  isError:  
}


一个项目整体的行为应有规范  

React 临时状态的管理  

在create react app 里：

理解 React.lazy(()=>import) 是否会单独打包成为一个JS文件。  


re-render

浅拷贝和深拷贝  
对应的浅对比render  

课程目录 类似慕课上的  
其它还得整理  


[A React utility belt for function components and higher-order components.](https://github.com/acdlite/recompose)    

<h1><sub>v0.0.3</sub>></h1>


