// My solution

// function sameFrequency(num1: number, num2: number): boolean {
// 	const str1 = num1.toString()
// 	const str2 = num2.toString()
// 	const hash1 = {}
// 	const hash2 = {}

// 	for (let char of str1) {
// 		hash1[char] = hash1[char] + 1 || 1
// 	}

// 	for (let char of str2) {
// 		hash2[char] = hash2[char] + 1 || 1
// 	}

// 	if (Object.keys(hash1).length !== Object.keys(hash2).length) {
// 		return false
// 	}

// 	return Object.keys(hash1).every((key) => hash1[key] === hash2[key])
// }

// Colt Steele's solution

// function sameFrequency(num1, num2){
// 	let strNum1 = num1.toString();
// 	let strNum2 = num2.toString();
// 	if(strNum1.length !== strNum2.length) return false;

// 	let countNum1 = {};
// 	let countNum2 = {};

// 	for(let i = 0; i < strNum1.length; i++){
// 	  countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
// 	}

// 	for(let j = 0; j < strNum1.length; j++){
// 	  countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
// 	}

// 	for(let key in countNum1){
// 	  if(countNum1[key] !== countNum2[key]) return false;
// 	}

// 	return true;
//   }
