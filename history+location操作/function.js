function func(){
	window.location.href='red.html'
}
function func1(){
	window.location.assign('blue.html')   //assign有历史记录
}
function func2(){
	window.location.replace('yellow.html') //replace 没有历史记录
}
function func3(){
	window.location.href='yellow.html'
}
function func4(){
	window.history.back()
}
function func5(){
	window.history.forward()
}
