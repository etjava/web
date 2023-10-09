# ES6

## 简介

![img](https://cdn.jsdelivr.net/gh/etjava/TyporaPIC/img/202310060758595.png)

```
ES6， 全称 ECMAScript 6.0 ，是 JavaScript 的下一个版本标准，2015.06 发版。
ES6 主要是为了解决 ES5 的先天不足，比如 JavaScript 里并没有类的概念，但是目前浏览器的 JavaScript 是 ES5 版本，大多数高版本的浏览器也支持 ES6，不过只实现了 ES6 的部分特性和功能。

参考网址： https://www.runoob.com/?s=ES6
```

## 开发工具

```
开发工具有很多 我们可以使用HBuilder,WebStorm等 这里我们以webStorm为例 讲解下开发工具中需要注意的地方
webstorm中 需要检查js版本 如下图所示
```

![image-20231006080621788](https://cdn.jsdelivr.net/gh/etjava/TyporaPIC/img/202310060806950.png)

## let&const关键字

```
ES2015(ES6) 新增加了两个重要的 JavaScript 关键字: let 和 const。
let 用来代替var 声明变量 不同的是let 声明的变量只在 let 命令所在的代码块内有效。
const 声明一个只读的常量，一旦声明，常量的值就不能改变。 类似Java中的final
```

### let的基本用法

**在块级作用域里有效（比如循环遍历内部就可以用let定义变量）**

```js
// let声明的变量只能在let所在的块级中有效
{
    // 定义块级
    let a = 0;
    var b = 1;
    console.log(a);
}

console.log(b);
console.log(a);// 报错 ReferenceError: a is not defined

```

![image-20231006215413356](https://cdn.jsdelivr.net/gh/etjava/TyporaPIC/img/202310062154765.png)

**不能重复声明**

```js
// let声明的变量不能重复定义 var可多次定义
{
    let a=0;
    //let a=2;// Identifier 'a' has already been declared
    var b=1;
    var b=3;
    console.log(a);
    console.log(b);
}
```

![image-20231006215622029](https://cdn.jsdelivr.net/gh/etjava/TyporaPIC/img/202310062156279.png)



**不存在变量提升1**

我们之前定义var 是可以进行变量提升的 但let不能进行变量提升

```js
// 不存在变量提升
for (var i = 0; i < 10; i++) {
    setTimeout(function(){
        console.log("var 定义的变量 "+i);// 输出十个 10
    })
}

for (let j = 0; j < 10; j++) {
    setTimeout(function(){
        console.log("let 定义的变量 "+j); // 输出 0123456789
    })
}

变量 i 是用 var 声明的，在全局范围内有效，所以全局中只有一个变量 i, 每次循环时，setTimeout 定时器里面的 i 指的是全局变量 i ，而循环里的十个 setTimeout 是在循环结束后才执行，所以此时的 i 都是 10。
变量 j 是用 let 声明的，当前的 j 只在本轮循环中有效，每次循环的 j 其实都是一个新的变量，所以 setTimeout 定时器里面的 j 其实是不同的变量，即最后输出 12345。（若每次循环的变量 j 都是重新声明的，如何知道前一个循环的值？这是因为 JavaScript 引擎内部会记住前一个循环的值）。
```

![image-20231006215853683](https://cdn.jsdelivr.net/gh/etjava/TyporaPIC/img/202310062158947.png)



**不存在变量提升2**

```js
// 不存在变量提升2
let a = 10;
a=100;
console.log(a);
console.log(b);
let b = a;

let 不存在变量提升，var 会变量提升:
console.log(a);  //ReferenceError: a is not defined
let a = "apple";
console.log(b);  //undefined
var b = "banana";
变量 b 用 var 声明存在变量提升，所以当脚本开始运行的时候，b 已经存在了，但是还没有赋值，所以会输出 undefined。
变量 a 用 let 声明不存在变量提升，在声明变量 a 之前，a 不存在，所以会报错。
```

![image-20231006220353196](https://cdn.jsdelivr.net/gh/etjava/TyporaPIC/img/202310062203400.png)



### const

```js
const关键字用来定义常量；
const挂件定义来常量后 常量的值不能被改变 
const定义的变量，不可改变，其他特性和let一样；
注意要点
const 如何做到变量在声明初始化之后不允许改变的？其实 const 其实保证的不是变量的值不变，而是保证变量指向的内存地址所保存的数据不允许改动。此时，你可能已经想到，简单类型和复合类型保存值的方式是不同的。是的，对于简单类型（数值 number、字符串 string 、布尔值 boolean）,值就保存在变量指向的那个内存地址，因此 const 声明的简单类型变量等同于常量。而复杂类型（对象 object，数组 array，函数 function），变量指向的内存地址其实是保存了一个指向实际数据的指针，所以 const 只能保证指针是固定的，至于指针指向的数据结构变不变就无法控制了，所以使用 const 声明复杂类型对象时要慎重。
```

基本使用

```js
const a1 = 10;
const a1 = 99;// a1 has already been declared
//a1=100;//Assignment to constant variable
console.log(a1);
```

![image-20231006220830679](https://cdn.jsdelivr.net/gh/etjava/TyporaPIC/img/202310062208612.png)

##  ES6 解构赋值

### 概述

```
解构赋值是对赋值运算符的扩展。具体点 解析结构 然后自动赋值，其目的是简化代码开发
他是一种针对数组或者对象进行模式匹配，然后对其中的变量进行赋值。
在代码书写上简洁且易读，语义更加清晰明了；也方便了复杂对象中数据字段获取。

解构模型
在解构中，有下面两部分参与：
解构的源，解构赋值表达式的右边部分。解构的目标，解构赋值表达式的左边部分。
```

### 对象的解构赋值

```js
// 对象的解构赋值
let obj={username:"etjava",pwd:"123456"}
// 以前的写法
/* let username=obj.username;
	let pwd=obj.pwd;
	console.log(username,pwd) */
// 使用解构赋值 从obj中解析解构出来 然后对username和pwd进行赋值
/* let{username,pwd}=obj;
	console.log(username,pwd) */
// 只解构赋值一个参数
/* let{username}=obj;
	console.log("只解构赋值一个参数 "+username); */
	// 解构时遇到不存在的参数 会直接报未定义
	let{username,age}=obj;
	console.log("解构时有不存在的变量："+username,age);
```

### function的解构赋值

```js
// 对象的解构赋值
let obj={username:"etjava",pwd:"123456"}
// function中的解构赋值
// 以前的写法 直接传入一个对象 使用时使用对象.属性名
/* function func(o){
				console.log(o.username,o.pwd);
			}
			func(obj); */

function func({username,pwd}){
    console.log("解构赋值 "+username,pwd);
}
func(obj);
```

![image-20231006222805002](https://cdn.jsdelivr.net/gh/etjava/TyporaPIC/img/202310062228086.png)



### 数组的解构赋值

```js
let arr=[1,2,3,'a','b','c'];
/* console.log(arr[3]) */

// 解构赋值方式
//let[a,b,c,d,e,f]=arr;
//console.log(a,b,c,d,e,f);// 1 2 3 a b c
//console.log(a);// 1

// 在解构赋值时 如果参数不全需要预留出参数的位置
let[a,b,,,,f]=arr;
console.log(a,b,f);// 1 2 c
```







### 数组模型的解构（Array）

```js
let [a, b, c] = [1, 2, 3];
// a = 1
// b = 2
// c = 3

可嵌套
let [a, [[b], c]] = [1, [[2], 3]];
// a = 1
// b = 2
// c = 3

可忽略 例如忽略c 但需要预留出c的位置
let [a, , b] = [1, 2, 3];
// a = 1
// b = 3

不完全的解构赋值
let [a = 1, b] = []; // a = 1, b = undefined

剩余运算符
let [a, ...b] = [1, 2, 3];
//a = 1
//b = [2, 3]

在数组的解构中，解构的目标若为可遍历对象，皆可进行解构赋值。可遍历对象即实现 Iterator 接口的数据。
let [a, b, c, d, e] = 'hello';
// a = 'h'
// b = 'e'
// c = 'l'
// d = 'l'
// e = 'o'

解构默认值
let [a = 2] = [undefined]; // a = 2
当解构模式有匹配结果，且匹配结果是 undefined 时，会触发默认值作为返回结果。
a 与 b 匹配结果为 undefined ，触发默认值：a = 3; b = a =3
a 正常解构赋值，匹配结果：a = 1，b 匹配结果 undefined ，触发默认值：b = a =1
a 与 b 正常解构赋值，匹配结果：a = 1，b = 2

```

## ES6对象简写

### 普通对象简写

```js
// 定义对象
let username="etjava";
let pwd="123456";
// 对象简写1
let student={
    username:username,
    pwd:pwd
}
console.log(student.username,student.pwd);//etjava 123456
// 对象简写2
let student2={
    username,// 如果key与value相同 可省略
    pwd
}
console.log(student2.username,student2.pwd);//etjava 123456
```

![image-20231006224106039](https://cdn.jsdelivr.net/gh/etjava/TyporaPIC/img/202310062241199.png)



### 带function的对象简写

```js
// 带function的对象简写1
let student3={
    username,
    pwd,
    getUserName:function(){
        return this.username;
    }
}
console.log(student3.getUserName())

// 带function的对象简写2
let student4={
    username,
    pwd,
    getUserName(){
        return this.username;
    }
}
console.log(student4.getUserName())
```

## ES6模板字符串

```
es6 模版字符串主要用于简化字符串的拼接
模板字符串是为了解决快速的创建拼接字符串的模板而诞生的
例如 user中有username,age ... 如果属性越多 那么拼接起来就越麻烦 此时使用es6的模板字符串就简单很多了
```

```js
// 这种方式 如果属性越多 那么拼接起来就越麻烦
let obj={name:'Jack',age:'20'};
let str='姓名：'+obj.name+'，年龄：'+obj.age;
console.log(str);
// 模板字符串拼接 使用``符号括起来 这个斜引号，再tab键上方 取值使用${}
let obj2={name:'Jack',age:'20'};
let str2=`姓名：${obj2.name}，年龄：${obj2.age}`;
console.log(str2);
```

## 箭头函数及this

```
在es6中，推出了一个新语法 箭头函数
以前定义一个函数，是这么定义的；
let fun=function(){
	console.log('我是普通函数');
};
现在可以简化下，用箭头函数：
let fun=()=>{console.log('我是箭头函数')};
然后假如函数体只有一条语句或者是表达式的时候{}可以省略
let fun=()=>console.log('我是箭头函数');
加形参情况；
let fun2=(a)=>console.log(a);
只有一个形参的时候 ()可以省略
改成：
let fun2=a=>console.log(a);
多个形参：
let fun3=(x,y)=>console.log(x,y);
fun3(20,30);

有返回值情况：
let fun6=(x,y)=>{
	console.log(x,y);
	return x+y;
}
console.log(fun6(1,3));

关于 箭头函数里的this；（重点）
箭头函数没有自己的this，箭头函数的this不是调用的时候决定的，而是再定义的时候所在的对象就是它的this
箭头函数的this看外层是否有函数，
如果有，外层函数的this就是内部调用箭头函数的this 
如果没有，则this是window
```

### 无参的箭头函数

```js
// 以前定义匿名函数
let fun1=function(){
    console.log("普通无参匿名函数");
}
// 调用函数
fun1();//普通无参匿名函数

// 箭头函数
let fun2=()=>{
    console.log("匿名无参的箭头函数");
}
fun2();//匿名无参的箭头函数
// 可以简写 {}里面只有一条语句时 {}可以省略
let fun2=()=>console.log("匿名无参的箭头函数");
fun2();//匿名无参的箭头函数
```

![image-20231006225936134](https://cdn.jsdelivr.net/gh/etjava/TyporaPIC/img/202310062259180.png)

### 带参数的箭头函数

```js
//带一个参数的箭头函数 如果只有一个参数 ()可以省略
let fun3=(a)=>console.log(a);// 12345
fun3(12345);
// 带多个参数的箭头函数
let fun4=(a,b,c)=>console.log(a,b,c);//a d 100
fun4("a","d",100);
// 只有一条return语句时{}和return都可以省略
//let fun5=(a,b)=>{return a+b;}
let fun5=(a,b)=>a+b;
let res = fun5(1,2);
console.log(res);// 3
```

### 箭头函数中的this

```
箭头函数没有自己的this，箭头函数的this不是调用的时候决定的，而是再定义的时候所在的对象就是它的this
箭头函数的this看外层是否有函数，
如果有，外层函数的this就是内部调用箭头函数的this 
如果没有，则this是window
```



```js
// 箭头函数中的this
console.log(this);// [object Window]
// 普通函数中的this
let fun1=function(){
    console.log("普通函数中的this ",this);//[object Window]
}
fun1();

// 对象的函数中的this
let obj={
    name:"etjava",
    age:12,
    getName(){
        console.log("对象中的this ",this);//this指代的当前obj对象
        return this.name;
    },
    // 箭头函数中的this
    getName2:()=>{
        console.log("箭头函数中的this ",this);// [object Window]
    }
}
console.log(obj.getName())
console.log(obj.getName2())

```

案例

```js
// 要获取最外部定义的变量值
需要借助箭头函数来获取 因为箭头函数中的this指代的是window对象 根据window对象可以获取最外部的属性值
let obj={
    name:'Etjava',
    age:12,
    getName:function(){
        console.log(`my name is ${this.name}`);
        return `${this.name}`;
    },
    getName2:()=>{
        console.log(`my name is ${this.name}`);
        return `${this.name}`;
    }
}
console.log("name1 "+obj.getName());// Etjava
console.log("name2 "+obj.getName2());// ''
```

## ES6三点运算符

```
三点运算符 即 可变参数
注意 
	可变参数前边如果还有其他参数 需要将三个点放到后面
```

```js
function fun(...params){
    console.log(params);
    // 遍历数组
    params.forEach(function(item,index){
        console.log(item,index);
    });
}
fun(1,2,3,4,5,6);

// 数组合并
let arr1 = [2,3];
let arr2 = [1,...arr1,4];// 合并arr1中的内容
console.log("arr2="+arr2);
```

## Symbol类型

```
es5中对象的属性名是都是字符串，容易造成重名；
es6引入Symbol数据类型（已有Number 、 String 、 Boolean 、 Object、 null 和 undefined 类型）
使用Symbol类型可以有效避免替换掉重名的属性
```

### 创建symbol属性值

每个定义的symbol都是唯一的

```js
let a = Symbol('s1');
let b = Symbol('s2');
console.log(a);
console.log(b);
console.log(a==b);// false
```

![image-20231008184010529](https://cdn.jsdelivr.net/gh/etjava/TyporaPIC/img/202310081841628.png)

### Symbol实际使用

```js
// 定义一个对象
let symbol=Symbol('address'); // 可以加参数 指定属性名
let obj={name:'jack',age:10};
// 假如我们要向对象里额外加个属性
// obj.address='南京路' // 以前的写法，不过假如属性很多的时候，可能会出现属性重复
obj[symbol]='南京路' // 这样能保证属性不重复
console.log(obj)
```

### Symbol做常量使用

```js
因为Symbol具有唯一性，所以我们可以做Symbol定义常量
const System_key=Symbol('123abc');
console.log(System_key);
```

### Symbol.for()

```js
// Symbol.for() 全局搜索指定key的Symbol，找到的话，就返回该Symbol，找不到，就新建一个
console.log(Symbol("foo") === Symbol("foo"));      // false
console.log(Symbol.for("bar") === Symbol.for("bar"));     // true
```

### Symbol.keyFor()

```js
// Symbol.keyFor() 返回一个已登记的 Symbol 类型值的 key 

let fooKey = Symbol.for("bar1");
console.log(Symbol.keyFor(fooKey)); // 返回bar1
```

## Map&Set

```
Map 键值对的集合
Set 单值集合 值的唯一的
```

### Map

#### 基本使用

```
基本使用 key是基本类型
 let map=new Map();
 map.set('name','张三');
 map.set('age',11);
 map.set('已婚',false);
 console.log(map.get('name'));
 console.log(map.get('age'));
 console.log(map.get('已婚'));
```

![image-20231008185248512](https://cdn.jsdelivr.net/gh/etjava/TyporaPIC/img/202310081852809.png)

#### key是对象

```js
 // key是对象
let obj={};
map.set(obj,'对象');
console.log(map.get(obj));
```

#### key是函数

```js
// key是函数
let func=function(){};
map.set(func,'函数');
console.log(map.get(func));
```

#### key是NaN

```js
// key是NaN
map.set(NaN,'NaN');
console.log(map.get(NaN));
console.log(map.get(Number('aaa')));
```

#### Map遍历

```js
// for ...of
let map2=new Map();
map2.set('name','张三');
map2.set('age',11);
map2.set('已婚',false);
for(let [key,value] of map2){
    console.log(key,value)
}
// 查询所有key
for(let key of map2.keys()){
    console.log(key)
}

// 查询所有value
for(let value of map2.values()){
    console.log(value)
}

// forEach方法迭代
map2.forEach(function(value,key){
    console.log(key,value)
});
```

![image-20231008190012115](https://cdn.jsdelivr.net/gh/etjava/TyporaPIC/img/202310081900095.png)

#### Map对象操作

```js
// Map与Array转换
// 数组转Map
let arr=[['k1','v1'],['k2','v2']];
let map3=new Map(arr);
map3.forEach(function(value,key){
    console.log(key,value)
});

// Map转数组
let arr2=Array.from(map3);
console.log(arr2);

// Map合并
let map4=new Map([...map3,...map2]);
console.log(map4)
```

![image-20231008190314077](https://cdn.jsdelivr.net/gh/etjava/TyporaPIC/img/202310081903132.png)

### Set对象

#### Set里的value值是唯一的

```
// set里面的值是唯一的
let myMap=new Map();
myMap.set('no001','张三');
myMap.set('no002','李四');
myMap.set('no003','张三');
console.log(myMap);
let mySet=new Set();
mySet.add('张三');
mySet.add('李四');
mySet.add('张三');
// 遍历
for(let value of mySet.values()){
console.log(value)
}
mySet.forEach(function(value){
	console.log(value)
});
```

![image-20231008192215822](https://cdn.jsdelivr.net/gh/etjava/TyporaPIC/img/202310081922888.png)

#### Set 数组转换

```js
// 数组 转Set
let arr3=[['k1','v1'],['k2','v2']];
let set3=new Set(arr3);
console.log(set3)

// set转数组
let arr4=[...set3];
console.log(arr4)
```

![image-20231008195013692](https://cdn.jsdelivr.net/gh/etjava/TyporaPIC/img/202310081950596.png)

#### 数组去重

```js
// 数组去重
let arr5=[1,3,5,3,6];
let set6=new Set(arr5);
let arr6=[...set6];
console.log(arr6)
```

![image-20231008195230257](https://cdn.jsdelivr.net/gh/etjava/TyporaPIC/img/202310081952024.png)

#### 求并集

```js
// 求并集
let a1 = new Set([1,2,3]);
let a2 = new Set([2,3,4]);
let union = new Set([...a1,...a2]);
console.log(union);
```

![image-20231008202001888](https://cdn.jsdelivr.net/gh/etjava/TyporaPIC/img/202310082134702.png)

#### 求交集

```js
let a3 = new Set([1,2,3]);
let a4 = new Set([2,3,4]);
// filter过滤器 传入a3中的每个值与a4数组的每个值比对 匹配的通过过滤
let intersect  = new Set([...a3].filter(x=>a4.has(x)));
console.log(intersect)
```

![image-20231008202736209](https://cdn.jsdelivr.net/gh/etjava/TyporaPIC/img/202310082134791.png)

#### 求差集

```js
let a3 = new Set([1,2,3]);
let a4 = new Set([2,3,4]);
// filter过滤器 传入a3中的每个值与a4数组的每个值比对 不匹配的通过过滤
let difference   = new Set([...a3].filter(x=>!a4.has(x)));
console.log(difference)
```

![image-20231008203126939](https://cdn.jsdelivr.net/gh/etjava/TyporaPIC/img/202310082134392.png)

##  Reflect 与 Proxy

```
 Reflect 与 Proxy是 ES6 为了操作对象引入的 API
 
 Proxy 可以对目标对象的读取、函数调用等操作进行拦截，然后进行操作处理。它不直接操作对象，而是像代理模式，通过对象的代理对象进行操作，在进行这些操作时，可以添加一些需要的额外操作。
Reflect 可以用于获取目标对象的行为，它与 Object 类似，但是更易读，为操作对象提供了一种更优雅的方式。它的方法与 Proxy 是对应的。
```

### 基本用法

```js
let pro = new Proxy(target,handler);
其中 new Proxy相当于创建了一个Proxy实例，target为所要拦截的目标对象，handler也是一个对象，里面定义的是对拦截对象所要进行的拦截方法。
```

### 案例1

```
创建的target对象为所要拦截的对象，handler对象为拦截对象后执行的操作，这里get方法为读取操作，即用户想要读取pro中的属性时执行的拦截操作。最后创建一个Proxy实例，因为我设定的读取拦截操作为输出一个属性字符串，所以当我想读取pro中的属性时，拦截输出一个属性字符串。
```

```js
// 创建对象
let target={name:'Tom',age:12};
// 创建代理对象
let handler={
    get(target,name){
        console.log(name)
        return target[name]
    }
}
// 调用代理对象
let pro = new Proxy(target,handler);
console.log(pro.name);
```

![image-20231008213436712](https://cdn.jsdelivr.net/gh/etjava/TyporaPIC/img/202310082134770.png)

### 案例2

```
拦截操作对象handler为空，未对拦截对象设定拦截方法，该情况下pro直接指向原对象target，访问pro等同于访问target，所以结果为target中的结果
```

```js
// 当handler为空时 直接操作target
let target2 ={name:'Tom2',age:13}
let handler2={

}
let pro2 = new Proxy(target2,handler2);
console.log("handler为空时" + pro2.name);
```

![image-20231008213903871](https://cdn.jsdelivr.net/gh/etjava/TyporaPIC/img/202310082139752.png)

### 案例3

```
上述实例将pro作为obj的原型对象使用，虽然obj本身没有name这个属性，但是根据原型链，会在pro上读取到name属性，之后会执行相对应的拦截操作
```

```js
let target3 ={name:'Tom3',age:13}
let handler3={

}
let pro3 = new Proxy(target3,handler3);
let obj = Object.create(pro3);// 如果handler为空 操作的还是target原型
console.log(obj.name);

/////////////////////////////////
let target3 ={name:'Tom3',age:13}
let handler3={
    get(target3,name){
        return target3[name];
    }
}
let pro3 = new Proxy(target3,handler3);
let obj = Object.create(pro3);// 如果handler为空 操作的还是target原型
console.log(obj.name);
```

![image-20231008214549831](https://cdn.jsdelivr.net/gh/etjava/TyporaPIC/img/202310082145788.png)

### Proxy常用的拦截方法

#### get

```
get(target, propKey, receive)方法，用于拦截某个读取属性的操作,第一个参数为目标对象，第二个参数为属性名称，第三个属性为操作所针对的对象（可选参数）
```

```js
let target5 = {username:'Andy',password:123}

let handler5 = {
    //第一个参数为目标对象，第二个参数为属性名称，
    //第三个属性为操作所针对的对象（可选参数）
    get(target5,propKey,receive){
        // 逻辑判断
        if(propKey in target5){
            console.log("success");
        }else{
            console.log("error")
        }
        // return Object.defineProperty(target5,propKey,receive);
        return Reflect.get(target, propKey, receive);
    }
}

let prop5 = new Proxy(target5,handler5);
console.log(prop5);
```

![image-20231008215506112](https://cdn.jsdelivr.net/gh/etjava/TyporaPIC/img/202310082155048.png)

#### set

```
set(target, propKey, value, receiver),用于拦截某个属性的赋值操作，
第一个参数为目标对象，
第二个参数为属性名，
第三个参数为属性值，
第四个参数为操作行为所针对的对象（可选参数）
```

```js
let target6 = {username:'Jack',password:123}
let handler6 = {
    get(target6, propKey, receive){
        if(propKey in target6){
            console.log("get success");
        }else{
            console.log("get error")
        }
        //return Object.defineProperty(target, propKey, receive);
        return Reflect.get(target6, propKey, receive);
    },
    set(target6, propKey, value, receiver){
        if(propKey=='age'){
            if(!Number.isInteger(value)){
                throw new TypeError('The age is not an integer');
            }else{
                console.log("set success");
            }
        }else{
            console.log("set success");
        }
        return Reflect.set(target6, propKey, value, receiver);
    }
}

let pro6 = new Proxy(target6,handler6);
pro.age=20;
pro.username='Tom';
console.log("-----------------------------")
console.log(pro6.age);
console.log(pro6.username);
```

![image-20231008220614602](https://cdn.jsdelivr.net/gh/etjava/TyporaPIC/img/202310082206626.png)

#### has

```
has(target, propKey)用来拦截对象是否具有某个属性值的操作，第一个参数为目标对象，第二个参数为属性名
```

```js
let target = {
	name:"小明",
	age: 15
}

let handler = {
	has(target,proKey){
		console.log('handle has');
		return proKey in target;
	}
}

let pro = new Proxy(target,handler);
console.log('name' in pro);
console.log('sex' in pro);
```

![image-20231008220900196](https://cdn.jsdelivr.net/gh/etjava/TyporaPIC/img/202310082209314.png)

### Reflect的静态方法

```
Reflect.apply(target, thisArg, args)
Reflect.construct(target, args)
Reflect.get(target, name, receiver)
Reflect.set(target, name, value, receiver)
Reflect.defineProperty(target, name, desc)
Reflect.deleteProperty(target, name)
Reflect.has(target, name)
Reflect.ownKeys(target)
Reflect.isExtensible(target)
Reflect.preventExtensions(target)
Reflect.getOwnPropertyDescriptor(target, name)
Reflect.getPrototypeOf(target)
Reflect.setPrototypeOf(target, prototype)
Reflect对象的静态方法和Proxy对象的静态方法一一对应
```

## 字符串

```
我们前面讲过模版字符串，这里再把一些常用的es6扩展 方法讲下
```

### 子串识别

```
indexOf 查找字符串中是否包含指定字符串  查找第一次出现的位置，从0开始
includes()：返回布尔值，判断是否找到参数字符串。
startsWith()：返回布尔值，判断参数字符串是否在原字符串的头部
endsWith()：返回布尔值，判断参数字符串是否在原字符串的尾部。
```

```js
let str='es6,hello';
console.log(str.indexOf('o'))  // 返回8
console.log(str.includes('he'))   // 返回true
console.log(str.startsWith('es'))  // 返回true
console.log(str.endsWith('ye'))  // 返回false
```

### 字符串重复

 repeat()：返回新的字符串，表示将字符串重复指定次数返回。

```js
console.log('Hello '.repeat(3)); // 返回 Hello Hello Hello
```

### 字符串补全

```
padStart：返回新的字符串，表示用参数字符串从头部（左侧）补全原字符串。
padEnd：返回新的字符串，表示用参数字符串从尾部（右侧）补全原字符串。
```

```js
console.log("11".padStart(5,"0"));  // 00011
console.log("11".padEnd(5,"0"));    // 11000
console.log("11".padStart(5));      //    11
```

## 数值类型

### Number常用方法

```
Number.isFinite() 用来检查一个数值是否为有限的（finite）
对于非数字，不会做隐式类型转换，直接返回false
Number.isNaN() 用来检查一个值是否为NaN

```

```js
console.log( Number.isFinite(1));   // true
console.log( Number.isFinite(0.1)); // true
```

### NaN 不是有限的

```js
console.log( Number.isFinite(NaN)); // false
console.log( Number.isFinite(Infinity));  // false
console.log( Number.isFinite(-Infinity)); // false
```

### Number.isFinate

```
Number.isFinate 没有隐式的 Number() 类型转换，所有非数值都返回 false

```

```js
console.log( Number.isFinite('foo')); // false
console.log( Number.isFinite('15'));  // false
console.log( Number.isFinite(true));  // false
```

### Number.isNaN

```
用于检查一个值是否为 NaN 
```

```js
console.log(Number.isNaN(NaN));      // true
console.log(Number.isNaN(true)); // false
```

### Number.parseInt

```
Number.parseInt() 方法可解析一个字符串，并返回一个整数
Number.parseFloat() 方法可解析一个字符串，并返回一个浮点数
```

```js
console.log(Number.parseInt('12.51')); // 12
console.log(Number.parseInt(12.34));   // 12
console.log(Number.parseFloat('123.45')) // 123.45
console.log(Number.parseFloat('123.45abc')) // 123.45
```

### Math

```
/*
   Math.sign 判断数字的符号（正、负、0）。
 */
console.log(Math.sign(2))  //  1
console.log(Math.sign(-2))  // -1

// 参数为 0 时，不同符号的返回不同
console.log(Math.sign(0))  // 0
console.log(Math.sign(-0))  // -0
// 判断前会对非数值进行转换
console.log(Math.sign('1'))  // 1
console.log(Math.sign('-1')) // -1
// 参数为非数值（无法转换为数值）时返回 NaN
console.log(Math.sign(NaN))  // NaN
console.log(Math.sign('hhh'))  // NaN

/*
	Math.cbrt 用于计算一个数的立方根
 */
console.log(Math.cbrt(27))  // 3

/*
	Math.trunc 用于返回数字的整数部分。
 */
console.log(Math.trunc(12.3)); // 12
console.log(Math.trunc(12));   // 12

// 整数部分为 0 时也会判断符号
console.log(Math.trunc(-0.5)); // -0
console.log(Math.trunc(0.5));  // 0
// Math.trunc 会将非数值转为数值再进行处理
console.log(Math.trunc("12.3")); // 12

// 空值或无法转化为数值时时返回 NaN
console.log(Math.trunc());           // NaN
console.log(Math.trunc(NaN));        // NaN
console.log(Math.trunc("hhh"));      // NaN
console.log(Math.trunc("123.2hhh")); // NaN
```

## Object

```
前面我们讲过es对象属性简写，解构赋值；我们这里主要讲讲常用的扩展方法
```

```js
// 对象方法
/*
	 Object.assign(target, source_1, ···)
	 用于将源对象的所有可枚举属性复制到目标对象中。
	 返回值是target对象
	 如果目标对象和源对象有同名属性，或者多个源对象有同名属性，则后面的属性会覆盖前面的属性。
*/
let target = {a: 1};
let object2 = {b: 2};
let object3 = {c: 3};
let returnObj=Object.assign(target,object2,object3);
console.log(target) //  {a: 1, b: 2, c: 3}
console.log(returnObj) // {a: 1, b: 2, c: 3}

// 注意点：assign 的属性拷贝是浅拷贝: just copy的是引用
let sourceObj = { a: { b: 1}};
let targetObj = {c: 3};
Object.assign(targetObj, sourceObj);
targetObj.a.b = 2;
console.log(sourceObj.a.b);  // 2

/*
	Object.is(value1, value2)
	用来比较两个值是否严格相等，与（===）基本类似。
 */
console.log(Object.is("q","q"));      // true
console.log(Object.is(1,1));          // true
console.log(Object.is("1",1));          // true
console.log("1"==1);  // true
console.log("1"===1);  // false 类型也要判断
console.log(Object.is([1],[1]));      // false
console.log(Object.is({q:1},{q:1}));  // false
```

## 数组

```
// 操作数据方法
// arr.push() 从后面添加元素，返回值为添加完后的数组的长度
let arr = [1,2,3,4,5]
console.log(arr.push(5))   // 6
console.log(arr) // [1,2,3,4,5,5]

// 2 arr.pop() 从后面删除元素，只能是一个，返回值是删除的元素
let arr2 = [1,2,3,4,5]
console.log(arr2.pop())     // 5
console.log(arr2)  //[1,2,3,4]

// 3 arr.shift() 从前面删除元素，只能删除一个 返回值是删除的元素
let arr3 = [1,2,3,4,5]
console.log(arr3.shift())  // 1
console.log(arr3)   // [2,3,4,5]

// 4 arr.unshift() 从前面添加元素, 返回值是添加完后的数组的长度
let arr4 = [1,2,3,4,5]
console.log(arr4.unshift(2))    // 6
console.log(arr4)  //[2,1,2,3,4,5]

// 5 arr.splice(i,n) 删除从i(索引值)开始之后的那个元素。返回值是删除的元素 　参数： i 索引值      n 个数
let arr5 = [1,2,3,4,5]
console.log(arr5.splice(2,2))     //[3,4]
console.log(arr5)    // [1,2,5]
// 6 arr.concat() 连接两个数组 返回值为连接后的新数组
let arr6 = [1,2,3,4,5]
console.log(arr6.concat([1,2]))  // [1,2,3,4,5,1,2]
console.log(arr6)   // [1,2,3,4,5]

// 7 str.split() 将字符串转化为数组
let str7 = '123456'
console.log(str7.split('')) // ["1", "2", "3", "4", "5", "6"]

// 8 arr.sort() 将数组进行排序,返回值是排好的数组，默认是按照最左边的数字进行排序，不是按照数字大小排序的，见例子。
let arr = [2,10,6,1,4,22,3]
console.log(arr.sort())   // [1, 10, 2, 22, 3, 4, 6]
let arr1 = arr.sort((a, b) =>a - b)
console.log(arr1)   // [1, 2, 3, 4, 6, 10, 22]
let arr2 = arr.sort((a, b) =>b-a)
console.log(arr2)  // [22, 10, 6, 4, 3, 2, 1]

// 9 arr.reverse() 将数组反转,返回值是反转后的数组
let arr = [1,2,3,4,5]
console.log(arr.reverse())    // [5,4,3,2,1]
console.log(arr)    // [5,4,3,2,1]

// 10 arr.slice(start,end) 切去索引值start到索引值end的数组，不包含end索引的值，返回值是切出来的数组
let arr = [1,2,3,4,5]
console.log(arr.slice(1,3))   // [2,3]
console.log(arr)    //  [1,2,3,4,5]

// 11 arr.filter(callback) 过滤数组，返回一个满足要求的数组
let arr = [1,2,3,4,5]
let arr1 = arr.filter( (i, v) => i < 3)
console.log(arr1)    // [1, 2]

// 创建数组
/*
   Array.of()
   将参数中所有值作为元素形成数组。
*/
console.log(Array.of(1, 2, 3, 4)); // [1, 2, 3, 4]

// 参数值可为不同类型
console.log(Array.of(1, '2', true)); // [1, '2', true]
// 参数为空时返回空数组
console.log(Array.of()); // []

/*
	Array.from()
	将类数组对象或可迭代对象转化为数组。
 */
// 参数为数组,返回与原数组一样的数组
console.log(Array.from([1, 2])); // [1, 2]
// 参数含空位
console.log(Array.from([1, , 3])); // [1, undefined, 3]

// 转换可迭代对象
// 转换 map
let map = new Map();
map.set('key0', 'value0');
map.set('key1', 'value1');
console.log(Array.from(map)); // [['key0', 'value0'],['key1','value1']]

// 转换 set
let arr = [1, 2, 3];
let set = new Set(arr);
console.log(Array.from(set)); // [1, 2, 3]

// 转换字符串
let str = 'abc';
console.log(Array.from(str)); // ["a", "b", "c"]

// 扩展方法
// 查找
/*
	 find()
	查找数组中符合条件的元素,若有多个符合条件的元素，则返回第一个元素。
 */
let arr2 = Array.of(1, 2, 3, 4);
console.log(arr2.find(item => item > 2)); // 3

/*
	findIndex()
	查找数组中符合条件的元素索引，若有多个符合条件的元素，则返回第一个元素索引。
 */
let arr3 = Array.of(1, 2, 1, 3);
// 参数1：回调函数
// 参数2(可选)：指定回调函数中的 this 值
console.log(arr3.findIndex(item => item = 1)); // 0

// 填充
/*
	fill()
	将一定范围索引的数组元素内容填充为单个指定的值。
 */
let arr4 = Array.of(1, 2, 3, 4,5);
// 参数1：用来填充的值
// 参数2：被填充的起始索引
// 参数3(可选)：被填充的结束索引，默认为数组末尾
console.log(arr4.fill(0,1,3)); // [1, 0, 0, 4, 5]
// 遍历
/*
	entries()
	遍历键值对。
 */
for(let [key, value] of ['a', 'b'].entries()){
	console.log(key, value);
}
// 0 "a"
// 1 "b"


// 不使用 for... of 循环
let entries = ['a', 'b'].entries();
console.log(entries.next().value); // [0, "a"]
console.log(entries.next().value); // [1, "b"]


/*
	keys()
	遍历键名。
 */
for(let key of ['a', 'b'].keys()){
	console.log(key);
}

/*
	values()
	遍历键值。
 */
for(let value of ['a', 'b'].values()){
	console.log(value);
}
// 包含
/*
	includes()
	数组是否包含指定值。
 */
// 参数1：包含的指定值
console.log([1, 2, 3].includes(1));    // true
// 参数2：可选，搜索的起始索引，默认为0
console.log([1, 2, 3].includes(1, 2)); // false
// NaN 的包含判断
console.log([1, NaN, 3].includes(NaN)); // true
```

## Class类

```
在ES6中，class (类)作为对象的模板被引入，可以通过 class 关键字定义类。
class 的本质是 function。
它可以看作一个语法糖，让对象原型的写法更加清晰、更像面向对象编程的语法

```

### 类定义class 以及 构造方法 constructor

```js
// 通过class定义类
class Person{
    // constructor类构造方法
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    // 普通方法
    getInfo(){
        return `姓名：${this.name},年龄：${this.age}`
    }
}
let person=new Person('jack',10); // 实例化
console.log(person)
console.log(person.getInfo());
```



![image-20231008225029545](https://cdn.jsdelivr.net/gh/etjava/TyporaPIC/img/202310082250064.png)

### 用extends实现继承以及方法重载

```js
// 用extends实现继承
class BlackPerson extends Person{
    constructor(name,age,height){
        super(name,age); // 调用父类构造方法
        this.height=height;
    }
    // 方法重写
    getInfo(){
        return `姓名：${this.name},年龄：${this.age}，身高：${this.height}`
    }
}
let xiaoHei=new BlackPerson('xiaoAo',20,180);
console.log(xiaoHei)
console.log(xiaoHei.getInfo())
```

![image-20231008225223528](https://cdn.jsdelivr.net/gh/etjava/TyporaPIC/img/202310082252590.png)

## 模块

```
概述
在 ES6 前， 实现模块化使用的是 RequireJS 或者 seaJS（分别是基于 AMD 规范的模块化库，  和基于 CMD 规范的模块化库）。
ES6 引入了模块化，其设计思想是在编译时就能确定模块的依赖关系，以及输入和输出的变量。
ES6 的模块化分为导出（export） @与导入（import）两个模块。
特点
ES6 的模块自动开启严格模式，不管你有没有在模块头部加上 use strict;。
模块中可以导入和导出各种类型的变量，如函数，对象，字符串，数字，布尔值，类等。
每个模块都有自己的上下文，每一个模块内声明的变量都是局部变量，不会污染全局作用域。
每一个模块只加载一次（是单例的）， 若再去加载同目录下同文件，直接从内存中读取。
```

### 基本使用

#### 定义模块

e.js

```js
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
```

#### 使用模块

```js
<!-- type="module" ES6规定的 要引入模块必须是type="module" -->
<script type="module">
    // 导入模块
    import {name,age,fun,myClass} from "./e.js";
console.log(name);
console.log(age);
console.log(fun());
console.log(myClass.email);
</script>
```

![image-20231008230607212](https://cdn.jsdelivr.net/gh/etjava/TyporaPIC/img/202310082306286.png)

#### 别名

```js
在导入时可以设置别名 一旦设置原来的名称将不能被使用
```

```js
<script type="module">
    // 导入模块
    import {name as myName,age,fun,myClass} from "./e.js";
console.log(name);// 空
console.log(myName);
console.log(age);
console.log(fun());
console.log(myClass.email);
</script>
```

![image-20231008230854327](https://cdn.jsdelivr.net/gh/etjava/TyporaPIC/img/202310082308196.png)

### export default

e2.js

```js
// 定义export模块
let name='Tom';

// 定义需要导出属性
export default name
```

页面引用

```html
<script type="module">
    import name from "./e2.js"
    console.log(name);
</script>
```

![image-20231008231701296](https://cdn.jsdelivr.net/gh/etjava/TyporaPIC/img/202310082317314.png)

```js
// 定义export模块
let name='Tom';

// 定义需要导出属性
export default{
	name:'Jerry',
	age:21,
	getInfo(){
		return `name: ${this.name},age: ${this.age}`;
	}
}
```

页面

```html
<script type="module">
    // 对象名称随意写
    import stu from "./e2.js"
    console.log(stu);
    console.log(stu.getInfo());
</script>
```

![image-20231008232220009](https://cdn.jsdelivr.net/gh/etjava/TyporaPIC/img/202310082322030.png)

## Promise 对象

```
Promise 对象是异步编程的一种解决方案。（再javascript世界里，是单线程顺序执行的）
从语法上说，Promise 是一个对象，从它可以获取异步操作的消息

Promise 异步操作有三种状态：
	pending（进行中）
	fulfilled（已成功）
	rejected（已失败）
	除了异步操作的结果，任何其他操作都无法改变这个状态。
Promise 对象只有：从 pending 变为 fulfilled 和从 pending 变为 rejected 的状态改变。只要处于 fulfilled 和 rejected ，状态就不会再变了即 resolved（已定型）。
```

```js
// resolve 表示成功状态,reject表示失败状态
			let promise=new Promise((resolve,reject)=>{
				console.log('promise初始化 状态 pending');// 同步执行
				setTimeout(()=>{
					console.log('使用定时器 模拟异步请求');
					// 成功状态
					resolve('异步请求返回，执行成功');// 状态会被改为 fulfilled
					// 失败状态
					//reject('请求失败');
				},1000);
			});
			// 调用
			promise
				.then((data)=>{// 成功时的回调
					console.log(data);
				},
				(data)=>{
					// 失败时的回调
					console.log('失败状态');
					console.log(data);
				});
```

![image-20231008233631193](https://cdn.jsdelivr.net/gh/etjava/TyporaPIC/img/202310082336241.png)

模拟ajax发送请求

```js
ajax请求用上Promise
以前写ajax请求 用原生的，很凌乱，就算用jquery ajax 回调方法那块也是多层嵌套，写业务逻辑也是很凌乱；
Promise 可以解决这种凌乱问题，让异步请求更加规整；维护方便
```

data.json

```json
{
  "ret": true,
  "data": {
    "studentList": [{
      "id": "0001",
      "name": "Jack"
    },{
      "id": "0002",
      "name": "Marry"
    },{
      "id": "0003",
      "name": "Sunndy"
    },{
      "id": "0004",
      "name": "Lini"
    }]
  }
}
```

页面发送请求

```html
<script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
<script>
    // 执行成功调用resolve  执行失败调用reject
    let promise=new Promise((resolve,reject)=>{
        console.log('promise初始化状态：pending')   // 同步执行
        $.get('./data.json',{},function(result){
            console.log('ajax异步操作');
            if(result.ret){
                console.log('执行成功')
                resolve(result.data);
            }else{
                console.log('执行失败')
                reject(result.data);
            }
        },'json');
    })
    console.log('代码继续执行')

    promise
        .then((data)=>{  // 第一个回调 成功resolve
        console.log(data)
    },(data)=>{   // 第二个回调 失败reject
        console.log(data)
    }
             )
</script>
```

![image-20231008234915198](https://cdn.jsdelivr.net/gh/etjava/TyporaPIC/img/202310082349276.png)

## Generator函数

```
Generator函数是es6提供的解决异步编程的方案之一；
Generator函数是一个状态机，内部封装了不同状态的数据；
generator定义 function后面跟个*号
yield语句可以用来暂停执行生成值 另外yield函数只能用于generator函数中
next方法可以恢复执行
```

### 基本使用

```js
function* myGenerator(){
    console.log('业务逻辑A')
    yield 'hello'
    console.log('业务逻辑B')
    yield 'world'
}
let mg = myGenerator()
// 我们直接调用的话，不会有任何输出；因为里面是个状态机；必须调用next()；
//mg.next();
//mg.next();
// 执行一次next() 指针想下偏移一次，根据yield来作用
console.log(mg.next())
console.log(mg.next())
// 可以通过mg.next().value方式获取yield的值
```

![image-20231008235713388](https://cdn.jsdelivr.net/gh/etjava/TyporaPIC/img/202310082357732.png)

![image-20231009000104044](https://cdn.jsdelivr.net/gh/etjava/TyporaPIC/img/202310090001445.png)
