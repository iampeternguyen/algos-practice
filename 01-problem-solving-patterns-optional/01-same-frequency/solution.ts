function sameFrequency(num1: number, num2: number): boolean {
	const str1 = num1.toString()
	const str2 = num2.toString()
	const hash1 = {}
	const hash2 = {}

	for (let char of str1) {
		hash1[char] = hash1[char] + 1 || 1
	}

	for (let char of str2) {
		hash2[char] = hash2[char] + 1 || 1
	}

	if (Object.keys(hash1).length !== Object.keys(hash2).length) {
		return false
	}

	return Object.keys(hash1).every((key) => hash1[key] === hash2[key])
}
