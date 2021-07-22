// My solution

// function areThereDuplicates(...args: Array<string | number>): boolean {
// 	if (!args.length) return false

// 	const counter = {}
// 	for (let item of args) {
// 		if (counter[item]) return true
// 		counter[item] = 1
// 	}
// 	return false
// }

// Colt Steele's Solution

// function areThereDuplicates() {
// 	let collection = {}
// 	for(let val in arguments){
// 	  collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
// 	}
// 	for(let key in collection){
// 	  if(collection[key] > 1) return true
// 	}
// 	return false;
//   }
