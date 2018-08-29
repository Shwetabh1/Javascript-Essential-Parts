/*
 * Collections in JavaScript
 * 1. Sets
 * 2. Maps
 * 3. SortedMap
 * 
 */

var map = new Map({a: 1, b: 2});
map.set("c", 3);
// true
map.toObject();
// {"a":1,"b":2,"c":3}
var key = {x: "hello"};
map.set(key, 4);
// true
map.get(key);
// 4
map.entries();

//Iterate using for each

map.forEach(function(value, key) {
	console.log(value);
	console.log(key);
})


var a = new SortedMap();

a.set(1,2);

a.set(2,2);

a.set(3,2);
//returns true or false
a.set(4,2);

a.keys()
a.values()
a.forEach(function(val, key){
	console.log('Value', val);
	console.log('Key',key);
})

//Implement a sorted Map by yourself

function customSortedMap() {
	var a = [];
	a.sort(function(a,b){
				return a-b;
			})
	this.add =function add(key,value) {
		if (!a[key]) {
			a[key] = value;
			
			return true;
		} else {
			return false;
		}
	}

	this.clear = function clear() {
		a = [];
	}

	this.get = function get(key) {
		return a[key];
	}
}