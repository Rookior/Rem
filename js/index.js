
//获取视窗的宽度
var htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;

//获取页面的HTML Dom
var htmlDom = document.getElementsByTagName('html')[0];

htmlDom.style.fontSize = htmlWidth / 10 + 'px';
