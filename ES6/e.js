// 定义export模块
let name='Tom';
let age=12;
// 定义function
let fun = function(){
	return `name:${name},age:${age}`;
}
// 定义类
let myClass = class myClass{
	static email='abc@usa.com';
}
// 定义需要导出属性和方法
export {name,age,fun,myClass}