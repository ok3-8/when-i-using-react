<p align="center">
  <img src="https://github.com/ok3-8/when-i-using-react/raw/master/libs/images/logo-new.png">
</p>
<p align="center">
  <img src="https://img.shields.io/badge/前端-front_end-important.svg" alt="前端">
  <img src="https://img.shields.io/badge/React-16+-brightgreen.svg" alt="React">
  <img src="https://img.shields.io/badge/学习资料-study-blue.svg" alt="学习资料">
  <img src="https://img.shields.io/badge/面试资料-interview-lightgrey.svg" alt="interview">
  <img src="https://img.shields.io/badge/不断学习-come_on-critical.svg" alt="不断学习">
</p>

## 当我在使用`React`的时候，我应该学习点什么？

> `React`是当今非常热门的前端框架，或许有人指出它本不是个框架；它本身的特点和于组件为核心的设计，只不过是个关注视图的UI库而已。如果当你深入了解它的API和设计思想，你会发现它始以UI而不止UI。它 还可以使用 Node 进行服务器渲染，或使用 React Native 开发原生移动应用。感谢上帝，它给我们带来很多不一样解决前端事儿的方案。

⚛️React 特点：
- ⭐️声明式设计 −React采用声明范式，可以轻松描述应用。  
- 📦高效 −React通过对DOM的模拟，最大限度地减少与DOM的交互。
- 🎃灵活 −React可以与已知的库或框架很好地配合。
- 🎨JSX − JSX 是 JavaScript 语法的扩展。React 开发不一定使用 JSX ，但我们建议使用它。
- 🍇组件 − 通过 React 构建组件，使得代码更加容易得到复用，能够很好的应用在大项目的开发中。
- 🍄单向响应的数据流 − React 实现了单向响应的数据流，从而减少了重复代码，这也是它为什么比传统数据绑定更简单。

React的核心是组件，组件的设计目的是提高代码复用率、降低测试难度和代码复杂度。  
提高代码复用率：组件将数据和逻辑封装，类似面向对象中的类。  
降低测试难度：组件高内聚低耦合，很容易对单个组件进行测试。  
降低代码复杂度：直观的语法可以极大提高可读性。

React 16+ 网址: [github](https://github.com/facebook/react)、[官网](https://reactjs.org/)、[官网-中文](https://zh-hans.reactjs.org/)

## 目录

- [基础](#React基础知识)
  - [state&props](#state)
  - [Router](#Router)
  - [路由权限](#路由权限)
  - [Redux](#Redux)
  - [React Hooks](#ReactHooks)
  - [设计模式](#设计模式)
  - [高阶组件](#高阶组件)
  - [react-script](#react-script)
- [精通 React Hooks](#精通ReactHooks) 
- [十大 React UI 库](#十大ReactUI库)
- [组件开发文档]()
- [脚手架]()
- [构建和CI/CD]() 
- [React Native]()
- [Next.js]() 
- [React 书单整理](#React书单整理BookList)  
- [周报 weekly](#周报weekly)
- [面试题 interview](#面试题interview)
- [React性能优化]() 
- [开发工具](#tools)
- [微前端]()
- [前端中台]()
- [工作流的模式和思维]()
- [软件工程和项目管理]()
- [生活哲学]()
- [总结和扯皮]()

---

![hot](http://www.devio.org/img/ico/ico_hot.gif)  
![new](http://www.devio.org/img/ico/ico_new.gif)


## React基础知识

1、React本地开发环境的搭建  
2、React组件 和 JSX  
3、React的属性（props）和状态（state）  
4、React组件的生命周期  
5、React表单- 非受控表单和受控表单  
6、React开发思想 - 状态提升和单向数据流  
7、React16新增特性 Context


课程目录

第一章 ：React 基础 (10讲)

01、课程介绍  
02、React出现的历史背景及特性介绍  
03、以组件方式考虑UI的构建  
04、JSX的本质 : 不是模板引擎，而是语法糖  
05、React组件的生命周期及其使用场景  
06、理解Virtual DOM及key属性的作用  
07、组件设计模式 : 高阶组件和函数作为子组件  
08、理解新的Context API及其使用场景  
09、使用脚手架工具创建React项目  
10、打包和部署

第二章 ：React 生态圈 (12讲)

11、Redux（1） : 前端为何需要状态管理库  
12、Redux（2） : 深入理解Store、Action、Reducer  
13、Redux（3） : 在React中使用Redux  
14、Redux（4） : 理解异步Action、Redux中间件  
15、Redux（5） : 如何组织Action和Reducer  
16、Redux（6） : 理解不可变数据（Immutability）  
17、React Router（1）：路由不只是页面切换，更是代码组织方式  
18、React Router（2）：参数定义，嵌套路由的使用场景  
19、UI组件库对比和介绍：Ant.Design、Material UI、Semantic UI  
20、使用Next.js创建React同构应用  
21、使用Jest、Enzyme等工具进行单元测试  
22、常用开发调试工具：ESLint、Prettier、React DevTool、Redux DevTool

第三章 ：构建可维护可扩展的前端应用 (6讲)

23、前端项目的理想架构：可维护、可扩展、可测试、易开发、易建构  
24、拆分复杂度（1）：按领域模型（feature）组织代码，降低耦合度  
25、拆分复杂度（2）：如何组织component、action和reducer  
26、拆分复杂度（3）：如何组织React Router的路由配置  
27、使用Rekit（1）：创建项目，代码生成和重构  
28、使用Rekit（2）：遵循最佳实践，保持代码一致性

第四章 ：常见场景的最佳实践 (13讲)

29、使用React Router管理登录和授权  
30、实现表单（1）：初始数据，提交和跳转  
31、实现表单（2）：错误处理，动态表单元素，内容动态加载  
32、列表页（1）：搜索，数据缓存和分页  
33、列表页（2）：缓存更新，加载状态，错误处理  
34、页面数据需要来源多个请求的处理  
35、内容页的加载与缓存  
36、基于React Router实现分步操作  
37、常见页面布局的实现  
38、使用React Portals实现对话框，使用antd对话框  
39、集成第三方JS库：以d3.js为例  
40、基于路由实现菜单导航  
41、React中拖放的实现

第五章：React性能优化 (5讲)

42、性能永远是第一需求：时刻考虑性能问题  
43、网络性能优化：自动化按需加载  
44、使用Reselect避免重复计算  
45、下一代React：异步渲染  
46、使用Chrome DevTool进行性能调优"


## Fiber原理简介

React API 一览

讲解React主要API，了解基本使用
以及原理

 
React中的更新

主要讲解React创建更新中主要的两
种方式ReactDOM.render和
setState

 
Fiber Scheduler

主要讲解Fiber调度流程，实现更新
分片的性能优化

 
各类组件的Update

讲解10多种不同类型的组件的更新
过程，以及如何遍历节点形成新的
Fiber树

 
完成节点任务

完成节点更新之后，完成节点的创
建，并提供优化到最小幅度的DOM
更新列表

 
提交阶段

根据更新列表最小幅度的改变
DOM，实现UI的更新

 
核心功能详解

讲解各种贯穿于更新和提交阶段的功
能，发挥的作用，以及如何实现的

 
全新功能详解  

Suspense和Hooks颠覆原先的  
React组件开发模式，提供更小粒度  
的更新以及更加适合解耦的API



学习React基础的链接

- [学习React之前你需要知道的的JavaScript基础知识](https://www.zcfy.cc/article/javascript-fundamentals-before-learning-react)  
- [React 基础知识点总结](https://juejin.im/post/5bc590aaf265da0ab915f2de)  
- [关于React你应该了解的一切：开始构建前你所需的基础知识](https://www.zcfy.cc/article/everything-you-should-know-about-react-the-basics-you-need-to-start-building-4694.html)  
- [React基础知识详解](https://shenbao.github.io/ishehui/html/React/React%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html)  
- []()  
- []()  
- []()  
- []()  
- []()  
- []()  
- []()  


## 技术储备

数据结构、正则表达式  
原生JS功底

## 在成为一个React高级工程师的路上

React源码深度解析 高级前端工程师必备技能  
React全栈+服务器渲染(ssr)打造社区Webapp  
全栈进阶课程 React16.8+Next.js+Koa2一步到位开发Github


三条任务线：

1、【基础 => 实践 => 部署上线】    
2、【React周边知识点包括知识点深入分析和面试题讲解】   
3、【React周边技术和衍生态技术，像杂货店】   

React的基础  
ceate-react-app  
webpack  
postcss&css-in-js  
样式、font、图片  
测试用例  
router  
redux  
mock server 
代码规范  
test(jest)  
TS  
git和gitlab  
jenkins  
docker  
埋点&log server  

this.setState()  
Time Slice  
Fiber() 

搭一个UI 库  
弄一个devdoc文档，可以在线修改代码  
搭一个脚手架  
弄一个通用项目目录构建  
VS code最佳实现  

React Native  
Next.js


1.NextJS — react体系最强大的同构框架  
2.OAuth授权体系 — 最广泛的第三方授权体系，如微信，QQ等  
3.React Hooks — 改变react的开发模式  
4.KOA — 基于node.js搭建服务器，配合next.js做项目同构  
5.Redis — 业界常用的内存数据库  

代码分割  
Context  
错误边界  
Fragments  
Portals  
forwardRef

https://www.e-learn.cn/content/qita/2737868
https://coding.imooc.com/?c=reactjs

动手更美好

实现一套基础组件   
实现在线编辑代码生效  
研究react UI库  
结合TypeScript  
immutable的原理是什么？ 
jest 单元测试  
hooks的实现  
React Fiber原理和优化  

```
import React, { lazy, Suspense } from 'react';
react suspense
```

学习React最终思路

了解全新React版本和了解React过去。 
提前了解未来的React开发模式，关注React版本的更新。

对于React API需要知道怎么使用，把握框架的使用流程形态和框架的边界性，针对性或深入了解React运行机制。

提升排查问题能力  
更好的理解React工作过程  
避免陷阱，提升应用性能和可靠性  
夯实数据结构以及算法设计能力

## 🃏React代码规范



 

- [React规范](https://github.com/ecomfe/spec/blob/master/react-style-guide.md)  
- [前端体系规划指南](https://github.com/phodal/fde)  
- [JavaScript Style Guide](https://github.com/airbnb/javascript)  
- [JavaScript Style Guide:翻译](https://github.com/dwqs/react-style-guide)  
- [Airbnb React/JSX 编码规范](https://hustyichi.github.io/2019/06/23/react-style/)  
- [A collection of hand-picked React style guides](https://freefrontend.com/react-style-guides/)  
- [Our React Style Guide](https://github.com/pagarme/react-style-guide)  
- []()  
- []()  

## ☯️后续关注React科学发展的妖艳姿势

官网、GitHub、知乎、掘金、sf.gg、周报、视频课程...

### 官网

这个没得说，官网肯定第一时间把知识宣布；在官网可以看到更多API和实时的进展。  
网站：https://reactjs.org

### GitHub

GitHub React：https://github.com/facebook/react   关注Github上的东西，除了官网，肯定还有其它更好的资源、Demo或Blog。

关注[Awesome Lists](https://github.com/search?p=1&q=awesome+react&type=Repositories)[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)肯定是个不错的选择，大把资源。

- [awesome-react](https://github.com/enaqx/awesome-react)  
- [awesome-react-native](https://github.com/jondot/awesome-react-native)  
- [awesome-react-components](https://github.com/brillout/awesome-react-components)  
- [awesome-react-hooks](https://github.com/rehooks/awesome-react-hooks)  
- [react-native-awesome-cn](https://github.com/crazycodeboy/react-native-awesome)  
- [awesome-nextjs](https://github.com/unicodeveloper/awesome-nextjs)  
- [awesome-reactnative-ui](https://github.com/madhavanmalolan/awesome-reactnative-ui)  

其实大家少不了会关注GitHub上前端大师的。    
或者说看别人写的Demo和Blog。   
这里暂不一一列出来。 

要看面试资料看下面：[面试题interview](#面试题interview)![new](http://www.devio.org/img/ico/ico_new.gif)

### 知乎、掘金、sf.gg

还有其他的，比如`简书`...  
这里还是很多国内技术人员发布的；  
不妨关注一下。  
对于国外网站，我这里也整理了一份：【[国外Web资源列表](#国外Web资源列表)![hot](http://www.devio.org/img/ico/ico_hot.gif) 】

### 周报

这里的周报基本都是介绍国外的，你可以直接打开网站或者订阅。  
我已经整理出来了：[周报weekly](#周报weekly)

### 视频课程

国外视频或者网站的视频课程还是蛮多的。  
让人感觉国外的程序员的需求不饱和，天天写文章。  
其实在国外网站比如`Medium`、`hackernoon`...  
在国内也很多：`慕课`、`腾讯`、`网易`、`百度传课`...  
其实如果你觉得你需要学习的，你都可以去搜索。    
毕竟弄出这些课程的人，也费不少脑筋，才好好整理这么好的资源。  
我平时都会去逛逛看看，他们都在传授些什么。  

## 十大ReactUI库

- material
- Ant-design
- SemanticUI
- Blueprint
- Rebass
- Fabric
- Grommet
- Onsen UI
- Virtualized
- Bootstrap

开发的过程，确实少不了UI库，有了它页面一下就出来了。
其实基于这一点，我比较偏向去看它的源码和理清它设计模式和理念。  
是一件非常开心和舒服的事情。  
自己会分析怎么生成开发文档，在线编辑代码实时更新组件。  
不但对自己的成长和见识上一个层次，还能认知到UI框架的体态和API设计。  

本人之前针对过ElementUI和MaterialUI源码开箱摸过，哈哈哈哈。  

MaterialUI和Blueprint。  
ElementUI和ant-design 符合国内使用。  

10 大顶级 React 库

A simple online fake REST API server https://jsonplaceholder.typicode.com

## React性能优化

使用immutable优化React   
记忆化库-memoize-one  

### 什么叫记忆性技术？

每次调用函数把你的传参和结果记录下来，遇到相同的传参，就直接返回记录缓存的结果，不用再去调用函数处理数据！

```js
import memoizeOne from 'memoize-one';

const add = (a, b) => a + b;
const memoizedAdd = memoizeOne(add);

memoizedAdd(1, 2); // 3

memoizedAdd(1, 2); // 3
// Add 函数并没有执行: 前一次执行的结果被返回

memoizedAdd(2, 3); // 5
// Add 函数再次被调用，返回一个新的结果

memoizedAdd(2, 3); // 5
// Add 函数并没有执行: 前一次执行的结果被返回

memoizedAdd(1, 2); // 3
// Add 函数再次被调用，返回一个新的结果

```

我们可以发现连续两次相同传参，第二次会直接返回上次的结果，每次传参不一样，就直接调用函数返回新的结果，会丢失之前的记录，并不是完全记忆，这也是个不足点！


### 关于isEqual函数（memoize-one推荐使用loadsh.isEqual）

一般两个对象比较是否相等，我们不能用===或者==来处理，memoize-one允许用户自定义传入判断是否相等的函数，比如我们可以使用lodash的isEqual来判断两次参数是否相等

```js
import memoizeOne from 'memoize-one';
import deepEqual from 'lodash.isEqual';

const identity = x => x;

const defaultMemoization = memoizeOne(identity);
const customMemoization = memoizeOne(identity, deepEqual);

const result1 = defaultMemoization({foo: 'bar'});
const result2 = defaultMemoization({foo: 'bar'});

result1 === result2 // false - 索引不同

const result3 = customMemoization({foo: 'bar'});
const result4 = customMemoization({foo: 'bar'});

result3 === result4 // true - 参数通过lodash.isEqual判断是相等的
```


Immutable Data 就是一旦创建，就不能再被更改的数据。

immutable.js

Immutable.js本质上是一个JavaScript的持久化数据结构的库 ，但是由于同期的React太火，并且和React在性能优化方面天衣无缝的配合，导致大家常常把它们两者绑定在一起。

Immutable.js是Facebook 工程师 Lee Byron 花费 3 年时间打造，但没有被默认放到 React 工具集里（React 提供了简化的 Helper）。它内部实现了一套完整的 Persistent Data Structure，且数据结构和方法非常丰富（完全不像JS出身的好不好）。像 Collection、List、Map、Set、Record、Seq。有非常全面的map、filter、groupBy、reduce、find函数式操作方法。同时 API 也尽量与 Object 或 Array 类似。 Immutable.js 压缩后下载有 16K。

其中有 3 种最重要的数据结构说明一下：（Java 程序员应该最熟悉了）

- Map：键值对集合，对应于 Object，ES6 也有专门的 Map 对象
- List：有序可重复的列表，对应于 Array
- Set：无序且不可重复的列表

seamless-immutable

seamless-immutable是另一套持久化数据结构的库，它并没有实现完整的 Persistent Data Structure，而是使用 Object.defineProperty（因此只能在 IE9 及以上使用）扩展了 JavaScript 的 Array 和 Object 对象来实现，只支持 Array 和 Object 两种数据类型，API 基于与 Array 和 Object ，因此许多不用改变自己的使用习惯，对代码的入侵非常小。同时，它的代码库也非常小，压缩后下载只有 2K。

如果有有兼容性，就使用 polyfill es-shims/es5-shim 来解决。

而seamless-immutable虽然数据结构和API不如Immutable.js丰富，但是对于只想使用Immutable Data来对React进行优化以避免重复渲染的我们来说，已经是绰绰有余了。而且Array和Object原生的方法等都可以直接使用，原有项目改动极小。


由于seamless-immutable的实现依赖于ECMAScript 5 和原生的Array、Object天然的兼容性，导致其在React中的使用非常简单，只要注意三点就可以达到效果:

初始化state
初始化state数据的时候，使用Immutable的初始化方式。

```js
import Immutable from 'seamless-immutable';

state: {
  orderList: Immutable([]),
}
```

修改state数据
修改state数据的时候，同样也要注意：

```js
saveOrderList(state, {payload: items}) {
      return {...state, orderList: Immutable(items)};
    }
```

shouldComponentUpdate

使用pure-render-decorator，真是方便、快捷又优雅。当然，由于decorator属于ES7的特性，babel还需要自己配置。

```js
import React from 'react';
import pureRender from 'pure-render-decorator';

@pureRender
class OrderListView extends React.Component {
```


React特色工具：Perf
Perf 是react官方提供的性能分析工具。Perf最核心的方法莫过于Perf.printWasted(measurements)了，该方法会列出那些没必要的组件渲染。很大程度上，React的性能优化就是干掉这些无谓的渲染。


https://segmentfault.com/a/1190000008925295













## 🦐国外Web资源列表

这是一份详尽的Web资源列表，希望能帮助您成为一名出色的Frontend开发人员。

- [Mozilla Developer Network](https://developer.mozilla.org/en-US/) for frontend (Html, CSS, Js, etc.) code reference and learning 🤓. This will be your code holy book 📚 and you should follow it religiously!
- [caniuse.com](https://caniuse.com/) to check ✅ cross-browser compatibility of frontend technologies.
- [kangax-js-compat-table](https://kangax.github.io/compat-table/es6/) to check ✅ JavaScript versions (ES5, ES6, ES2016+ etc.) compatibility across different compilers, servers/runtimes and platforms (Desktop and Mobile).
- [web.dev](https://web.dev) to learn about web 🕷 fundamentals from Google Developers 👨‍💻.
- [v8.dev](https://v8.dev) to learn about Google’s open-source high-performance Javascript and WebAssembly engine 🦸‍♂️ that empowers Chrome and NodeJS.
- [css-tricks](https://css-tricks.com) to learn everything about CSS 😻. Period.
- [htmlreference.io](https://htmlreference.io/), [cssreference.io](https://cssreference.io/) to have an HTML/CSS visual guide 🤩 and code reference bookmark.
- [javascript.com](https://www.javascript.com), [javascript.info](http://javascript.info/) to start learning about Javascript 😼.
- [ponyfoo.com](https://ponyfoo.com/) to get valuable content about the Open Web platform 🕸️.
- [smashingmagazine.com](https://www.smashingmagazine.com/) to get professional resources for web designers 🤓 and developers.
- [freecodecamp.org](https://www.freecodecamp.org) to build frontend projects and collaborate with the community 👨‍🏫.
- [frontendmasters.com](https://frontendmasters.com/) to advance 🔥 your skills with in-depth, modern frontend courses.
- [codecademy.com](https://www.codecademy.com), [udemy.com](https://www.udemy.com), [pluralsight.com](https://www.pluralsight.com/), [lynda.com](https://www.lynda.com/) to do free and paid 💴 online code courses.
- [egghead.io](https://egghead.io/) to learn the best JavaScript tools and frameworks from industry pros 😎.
- [alligator.io](https://alligator.io/) to quickly understand seemingly-difficult frontend code concepts 😮.
- [leanpub.com](https://leanpub.com) to easily write, publish and sell in-progress and completed ebooks 📚 and online courses.
- [frontendfront.com](https://frontendfront.com) to stay updated with the latest web news, trends and conferences 📣 happening all over the world 🌍.
- [uptodate.frontendrescue.org](https://uptodate.frontendrescue.org) to follow frontend leaders 🏆 , find the best resources, attend conferences, get inspired and build your stuff.
- [medium.com](https://medium.com) to discover, read 📖 and write 🖊 related articles.
- [twitter.com](https://twitter.com), [instagram.com](https://www.instagram.com) to follow people you like, discover what they do 🔍 and share your work.
- [producthunt.com](https://www.producthunt.com) to discover and submit 💯 new products.
- [codepen.io](https://codepen.io) to build, test 🧐 and discover frontend code.
- [jsfiddle.net](https://jsfiddle.net/) to build demos for libraries/framework documentation 📃 and fiddle with frontend code.
- [repl.it](https://repl.it/) to learn, build, collaborate and host your ideas in one place 🤩.
- [codesandbox.io](https://codesandbox.io) to build ✍️ and share web applications using cutting edge technologies.
- [github.com](https://github.com) to host and review 🧐 code, manage projects and build software 🤖 alongside millions of developers.
- [stackoverflow.com](https://stackoverflow.com/) to get answers to your toughest coding questions 😁, share knowledge with your coworkers in private, and find your next dream job.
- [hashnode.com](https://hashnode.com/) to connect with developers all around the world and grow your career 🤓.
- [dev.to](https://dev.to/) to share and discover great ideas, have debates and make friends 💛.

这份列表来自【[essential-frontend-resources-in-2019](https://github.com/Zahinize/essential-frontend-resources-in-2019)】

## 🛠️面试题interview

到底什么叫面试？面试的哲学和核心在哪里？
我们应该怎么更好地推荐自己和展示自我。

这里有篇文章讲的是React面试该怎样去面试一个人，蛮好的
【[以面试官的角度来看 React 工作面试](https://github.com/xitu/gold-miner/blob/master/TODO1/a-react-job-interview-recruiter-perspective.md)】

很多面试像了解一个人，都像面试边界性和深入原理的问题。
针对这个问题的解决方案和自己看法。
对前端的架构和项目搭建，怎么运作下去；周边技术的对接和认知。
技术的选型中怎么判断优缺点；怎么规划好。

我们知道有个网站叫：[rapid-es6](https://rapides6.herokuapp.com/)大概讲的是为ES6复习用的，提了一些小片段代码，看运行能打印出什么结果。
两个特点：代码片段小，题目分类多。
使用利用这个特色怎么改造成为React所用？
【[List of top 500 ReactJS Interview Questions & Answers....Coding exercise questions are coming soon!!](https://github.com/sudheerj/reactjs-interview-questions)】
【[项目的面试题来源于 sudheerj/reactjs-interview-questions 这个项目。一时兴起就动起了翻译的念头](https://github.com/semlinker/reactjs-interview-questions)】

Virtual DOM和Diff原理  
JSX语法的由来  
组件首字母大写和classname  
css-in-js  
state和props、数据流  
生命周期  
动画和优化  
高阶组件  
Redux 中间件  
React Fiber  
hooks  
配合TypeScript

必须要会的 50 个React 面试题: https://segmentfault.com/a/1190000018604138

掘金上蛮多React面试题的，可以去搜集一些。
https://segmentfault.com/a/1190000019339210

React高频面试题梳理，看看面试怎么答？（上）
「框架篇」React 中 的 9 种优化技术
React16组件化+测试+全流程实战“在线账本”项目 https://coding.imooc.com/class/302.html

【React学习路线】从零进阶前端核心工程师 http://www.imooc.com/article/details/id/274378

国外的interface：

[51 Most Important ReactJS Interview Questions and Answers](https://www.opencodez.com/web-development/51-important-reactjs-interview-questions-answers.htm)
[ReactJs Interview Questions](https://www.educba.com/reactjs-interview-questions/)
[35+ Basic & Advanced ReactJS Interview Questions for 2019](https://tms-outsource.com/blog/posts/react-interview-questions/)
[Interview Preparation — React & Redux-1](https://dev.to/nabendu82/interview-preparation-react-redux-1-5i7)
[End your search here for top Interview Questions with Answers](https://www.bestinterviewquestion.com/)

[developers Web front-end](https://www.toptal.com/developers/blog/web-front-end)
[https://hackr.io/blog](https://hackr.io/blog)
[essential-frontend-resources-in-2019](https://github.com/Zahinize/essential-frontend-resources-in-2019)

how-to-bind-methods-or-event-handlers-in-jsx-callbacks
https://github.com/FAQGURU/FAQGURU/blob/master/topics/en/react.md#how-to-bind-methods-or-event-handlers-in-jsx-callbacks
  
## 🎉周报weekly

这里整理React的一些国外周报，非常值得收藏和为我所用。

|  周报周报每周一报 |  介绍  |
|  ----  | ---- |
|  I_am_a_placeholder_placeholder  | nothing |
|[react16-weekly](https://github.com/ok3-8/react16-weekly)|🍋A weekly roundup of the latest React and React Native links and tutorials.|
|[React Status](https://react.statuscode.com/)|A weekly roundup of the latest React and React Native links and tutorials.|
|[Week of React](https://www.getrevue.co/profile/Andres-from-Jexia)|Weekly curated blogs and tools for React pros.|
|[React.js Newsletter](http://reactjsnewsletter.com/)|The free, weekly newsletter of the best React news, articles, projects, and more - brought to you by TylerMcGinnis.com|
|[React Native Newsletter](http://reactnative.cc/)|A curated, fun to read newsletter all about React Native, Free bi-weekly summary of React Native news, articles, issues & pull requests, libraries and apps.|
|[Fullstack React Newsletter](http://newsletter.fullstackreact.com/)|Fullstack React is a weekly newsletter about the React ecosystem with an emphasis on useful libraries, tutorials and code. Subscribe to read the best articles each week on React, Flux, GraphQL, Relay, and friends.|
|[React Digest Newsletter](https://reactdigest.net)|React Digest is a weekly email newsletter that keeps you up to date with the React world.|
|[Awesome React](https://awesomereact.com)|All the latest and hottest news about React, a comprehensive overview of the best resources to get started, awesome playlists, talks from conferences and so much more...|
|[This Week in React](https://this-week-in-react.org)|Regular coverage of interesting pull requests, discussions, and RFCs around React Core and React DOM.|
|[Week of React](www.theweekofreact.com)|Week of React - Weekly curated blogs and tools for React pros....|
|[React Podcast](https://reactpodcast.simplecast.fm)|Conversations about React with your favorite developers.|
|[Made with React](https://madewithreact.com/)|A collection of websites and applications using the React or React Native JavaScript library.|
|[JavaScript Weekly](https://javascriptweekly.com/)|A free, once–weekly email roundup of JavaScript news and articles.|
|[Weekend JavaScript](https://weekendjs.com/)|Hey! I'm Ianis. And this is a curated list of JavaScript news and articles (sending every Friday). No spam. Just fresh write-ups on the language features, frameworks, testing practices and beyond.|
|[Node Weekly](https://nodeweekly.com/)|A free, once–weekly e-mail round-up of Node.js news and articles.|
|[StatusCode Weekly](https://weekly.statuscode.com/)|A weekly newsletter covering software development, Web operations, infrastructure, platforms, and performance, from browser down to the metal.|
|[DB Weekly](https://dbweekly.com/)|A weekly round-up of database technology news and articles covering new developments, SQL, NoSQL, document databases, graph databases, and more.|
|[Frontend Focus](https://frontendfoc.us/)|A once–weekly roundup of the best front-end news, articles and tutorials. HTML, CSS, WebGL, Canvas, browser tech, and more.|

### 其它weekly

[这些国外前端周刊值得你收藏一下](https://segmentfault.com/a/1190000010934003)  
[Our newsletters, websites and social media accounts](https://cooperpress.com/publications/)

[将 React 作为 UI 运行时](https://overreacted.io/zh-hans/react-as-a-ui-runtime/)

[freecodecamp-tag-react](https://www.freecodecamp.org/news/tag/react/)
[awesomereact](https://awesomereact.com)
[A collection of awesome things regarding React ecosystem.](https://github.com/enaqx/awesome-react)
[Curated List of React Components & Libraries.](https://github.com/brillout/awesome-react-components)

[React-社区资源](https://zh-hans.reactjs.org/community/support.html) 
[React-工具](https://zh-hans.reactjs.org/community/component-workbenches.html) 

## 📚React书单整理BookList

### React

《深入React技术栈》  
《深入浅出React和Redux》  
《React 进阶之路》  
《React设计模式与最佳实践》  
《React快速上手开发》  
《React（第2版）：引领未来的用户界面开发框架》  
《React全栈:Redux+Flux+webpack+Babel整合开发》  
《React状态管理与同构实战》  
《React 精髓》  
《React导学》  
《React与Redux开发实例精解》  
《React前端技术与工程实践》  
《React开发实战》  
《React学习手册》  
《快速上手React编程》  

### React Native

《React Native跨平台移动应用开发（第二版）》  
《React Native入门与实战》  
《React Native开发指南》  
《React Native：用JavaScript开发移动应用》  
《React Native应用开发实例解析》  
《React Native移动开发实战》  
《React Native精解与实战》  
《React Native全教程:移动端跨平台应用开发》  
《React Native 移动开发实战》  
《React Native Cookbook 中文版》  


## 🎳精通ReactHooks


什么是Hooks

Hooks解决了什么问题

Hooks注意事项

Hooks工具和教程





30分钟精通React Hooks：
https://juejin.im/post/5be3ea136fb9a049f9121014

React Hooks 详解 【近 1W 字】+ 项目实战
https://juejin.im/post/5dbbdbd5f265da4d4b5fe57d

精读《Function Component 入门》
https://juejin.im/post/5ceb36dd51882530be7b1585

A Guide to Learning React Hooks
https://dev.to/httpjunkie/a-guide-to-learning-react-hooks-58a0

## 其它

[掘金翻译前端列表](https://github.com/xitu/gold-miner/blob/master/front-end.md)


这个有个人搞了个hooks改写HOC
https://www.freecodecamp.org/news/react-hooks-to-hocs/

## 待办

- [ ] 整理资料
- [ ] 归纳分类
- [ ] 梳理层次

## 说明

### 介绍

*  **入门指南和实践项目：** 本文档倾向于给您提供一个比较详细的学习路径，让您对于React整体的知识体系有一个初步认识。另外，本文的一些文章
也是您学习和复习 React 知识不错的实践；
*  **由浅入深和原理剖析：** 本文档虽然更适合回顾知识，准备面试，收集更多优秀文章，不过会梳理清楚 React 内在核心和实践原理，并会归纳更多针对性优化性能的知识。相信您能收获更多有意义知识点。

Markdown 格式参考：[Github Markdown格式](https://guides.github.com/features/mastering-markdown/)  
表情素材来自：[EMOJI CHEAT SHEET](https://www.webpagefx.com/tools/emoji-cheat-sheet/)  
利用 docsify 生成文档部署在 Github pages: [docsify 官网介绍](https://docsify.js.org/#/)  
JavaScirpt实现幻灯片：[Impress.js](https://github.com/impress/impress.js)、[Reveal.js](https://github.com/hakimel/reveal.js)  

### 欢迎转载

虽然整理起来挺辛苦、蛮耗时间，如需转载注明原地址即可。

### 积极贡献

为开源做贡献是学习、教学和在你能想象的任何技能上积累经验的有益途径。

- 提升现有技能

不管是写代码、用户界面设计、平面造型设计、写作，或是规划，如果你在寻找实践机会，在开源项目中总有适合你的任务。

- 结识爱好相似的人

拥有热情而友好的团体组织的开源项目使人们在多年以来常常回访。许多人通过参与开源成了一辈子的好朋友，无论是在会议中碰面还是深夜里线上聊玉米煎饼。

- 找到导师和教导他人

在共享的项目中与他人一起工作，意味着你必须解释你做事的方式，此外还要寻求他人的帮助。学习和教导，对参与其中的所有人都是一种满足的活动。

- 开发公开作品，帮你提升声望（和事业）

根据定义，你的所有开源工作都是公开的，这意味着你得到了免费的样本，可以带到任何地方，作为你能做事情的证明。

- 学习交际能力

开源提供了练习领导才能和管理技能的机会，比如解决冲突、组织不同团队的人，和给工作排优先级。

- 人人都可以参与改变，不分大小

你不一定要成为终生的贡献者才能享受参与开源的乐趣。你是否曾在网站上看到一个拼写错误，希望某人会修正它？在开源项目中，你就能做到这点。开源帮助人们在他们的生命中和他们对世界的体验中感受到力量，这本身是令人满足的。

## 卖艺不卖身

博学之，审问之，慎思之，明辨之，笃行之。

作者：[蓝少 (@bluezhan)](https://github.com/bluezhan)
版权声明：自由转载-非商用-非衍生-保持署名（[创意共享 3.0 许可证](http://creativecommons.org/licenses/by/4.0/)）

## License

Released under the MIT License.

