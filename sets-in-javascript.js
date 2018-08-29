/*
	Sets in JavaScript
	Methods:    Set.prototype.add()
			    Set.prototype.clear()
			    Set.prototype.delete()
			    Set.prototype.entries()
			    Set.prototype.forEach()
			    Set.prototype.has()
			    Set.prototype.values()
 */
var arr = [1,2,3,4,1,2,3,4];

var set = new Set(arr);

console.log(set);

set.add(4)
console.log(set.add(4))

set.has(null)

set.has(4)

set.add(6)

set.delete(3)

