var test = require('./src/test.js')

document.getElementById('btn1').onclick = () => {
	console.log('test1')
	require.ensure([], (require) => {
		console.log('test1 async')
		var test1 = require('./src/test1.js')
	})
}

document.getElementById('btn2').onclick = () => {
	console.log('test2')
	require.ensure([], (require) => {
		console.log('test2 async')
		var test = require('./src/test.js')
		var test2 = require('./src/test2.js')
	})
}