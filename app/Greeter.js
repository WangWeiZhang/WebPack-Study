/*普通的写法*/
/*
module.exports=function test(){
	var a=5;
	var b=6;
	var greet = document.createElement("div");  //创建dom元素
	greet.textContent = "Hi x and greetings welcome";//绑定dom内容
	return greet;//返回带有dom内容的对象
}
 */

var config = require("./config.json");
module.exports=function test(){
    var greet = document.createElement("div");  //创建dom元素
    greet.textContent = config.greeterText;//绑定dom内容
    return greet;//返回带有dom内容的对象
}