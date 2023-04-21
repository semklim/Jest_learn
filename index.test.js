"use strict"

const random = () => {
	return Math.floor(Math.random() * 100);
}

// 1 
const multiply = (arr) => {
	arr = arr.map((el, i) => (i + 1) % 2 === 0 ? el = el * 2 : el = el);
	return arr
}
describe('check arr if even elements is double', () => {
	const arrLength = 10;
	const arr = (new Array(arrLength)).fill(1).map(el => el = random());
	test("Element that must be not double", () => {
		expect(multiply(arr)[0]).toBe(arr[0]);
	});
	test("Element than must be double", () => {
		expect(multiply(arr)[1]).toBe(arr[1] * 2);
	});
})

// 2

const sum = (a, b, c, callback) => {
	const sum = a + b + c;
	callback(sum);
}
const mockCallback = jest.fn(x => 42 + x);
describe(' ', () => {
	test('Working callback', () => {
		sum(0, 1, 2, mockCallback);

		// The mock function was called twice
		expect(mockCallback.mock.calls).toHaveLength(1);

		// The first argument of the first call to the function was 3
		expect(mockCallback.mock.calls[0][0]).toBe(3);

		// The return value of the first call to the function was 42
		expect(mockCallback.mock.results[0].value).toBe(45);
	});

})

//3

const testing = jest.createMockFromModule('./index.js');

testing.test1 = jest.fn((num) => num * 2);
testing.test2 = jest.fn((num) => num / 2);
describe('Mock Module', () => {
	test('implementation created by jest.createMockFromModule', () => {
		expect(testing.test1(2)).toBe(4);
		expect(testing.test2(8)).toBe(4);
	});

})