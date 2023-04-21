"use strict"

const test1 = (arr) => {
	arr = arr.map((el, i) => (i + 1) % 2 === 0 ? el = el * 2 : el = el);
}


const test2 = (a) => {
	const sum = a;
}

module.exports = {
	test1,
	test2
}