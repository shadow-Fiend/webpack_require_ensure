require.ensure(dependencies: String[], callback: function(require), errorCallback: function(error), chunkName: String)

[官方介绍 webpack medule methods require.ensure](https://www.webpackjs.com/api/module-methods/#require-ensure)

[github实例 webpack_require_ensure](https://github.com/shadow-Fiend/webpack_require_ensure)

---

webpack 特有的模块方法，异步加载所需的 js 文件

原理：把 js 模块独立导出一个 .js 文件，在使用这个模块的时候 webpack 会构造 script dom 元素，即创建一个 script 标签加入到 document.head 对象中去，由浏览器发起异步请求这个 js 文件。我们可以定义一个回调函数，去定义得到这个 js 文件之后，需要做的业务逻辑操作。

```
// 按钮点击跳转异步请求其他页面
funBtn.click(() => {
	// 获取 文档head对象
	let head = document.getElementsByTagName('head')[0]
	// 构建 <script>
	let script = document.createElement('script')
	// 设置src属性
	script.async = true // 规定脚本将被异步执行
	script.src = 'https://wwww.xxxxx.com'
	// 加入到head对象中
	head.appendChild(script)
})
```
```
funBtn.click(() => {
	require.ensure([], (require) => {
		let test = require('./test.js')
	})
})
```

require.ensure 这个函数是一个代码分离的分割线，表示回调里面的 require 是我们想要分割出去的，即 require('./test.js')，把 test.js 分割出去形成一个 webpack 打包的单独 js 文件，当然 ensure 里面也是可以写一些同步的 require 示例如下：

```
var test1 = require('./test1.js')

funBtn.click(() => {
	require.ensure([], (require) => {
		let test = require('./test.js')
		var test1 = require('./test1.js') // 这个不会独立出去，因为它已经加载到模块缓存中了
	})
})
```

- github 实例 

1.代码 clone 下来之后可以 build 出来双击 dist 里面的 index.html 

2.也可以 start 跑起来在本地 localhost:8087 看文件加载顺序
