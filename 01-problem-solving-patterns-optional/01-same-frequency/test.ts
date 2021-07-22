import sameFrequency from './index'

test('return true for 1234 and 4321', () => {
	expect(sameFrequency(1234, 4321)).toBeTruthy()
})

test('return false for 122234 and 223142', () => {
	expect(sameFrequency(122234, 223142)).toBeTruthy()
})

test('return false for 1234 and 231', () => {
	expect(sameFrequency(1234, 231)).toBeFalsy()
})

test('return false for 122234 and 12234', () => {
	expect(sameFrequency(122234, 12234)).toBeFalsy()
})
