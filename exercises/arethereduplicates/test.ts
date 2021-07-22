import areThereDuplicates from './index'

describe.skip('areThereDuplicates tests', () => {
	test('return true for 1234 and 4321', () => {
		expect(areThereDuplicates(1, 2, 3, 4)).toBeFalsy()
	})

	test('return false for 122234 and 223142', () => {
		expect(areThereDuplicates('a', 'b', 'a', 'd')).toBeTruthy()
	})

	test('return false for 1234 and 231', () => {
		expect(areThereDuplicates(1, 2, 4, 5, 2)).toBeTruthy()
	})

	test('return false for empty parameters', () => {
		expect(areThereDuplicates()).toBeFalsy()
	})
})
