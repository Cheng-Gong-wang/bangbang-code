/* Map WeakMap()
Map 是es6提供给我们的一个构造函数，本质上是键值对的集合，和对象类似
Map()只接受数组作为对象，并且数组的成员还是一个数组，其中包含两个元素，一个元素是键，一个元素是值
set方法 设置键值对，键可以是各种类型，包含undefined, function
*/

{
    // 1.添加元素 set(k:v)
    let map = new Map();
    map.set([1,2,3],"number");
    console.log(map)
}