import { encrypt, decrypt } from './../algorithm.ts'

test('Encrypting the data', () => {
	expect(encrypt('a', 1)).toBe('b')
	expect(encrypt('abc', 1)).toBe('bcd')
})

test('Decrypting the data', () => {
	expect(decrypt('b', 1)).toBe('a')
	expect(decrypt('bcd', 1)).toBe('abc')
})
