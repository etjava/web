// 定义export模块
let name='Tom';

// 定义需要导出属性
export default{
	name:'Jerry',
	age:'22',
	getInfo(){
		return `name: ${this.name},age: ${this.age}`;
	}
}