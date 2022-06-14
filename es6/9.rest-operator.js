// Rest operator - semblable au spread operator dans son écriture, son utilisation est cependant différente
const sum = (...numbers) => {
	return numbers.reduce((total, n) => total + n, 0)
}

console.log(sum(1)) // 1
console.log(sum()) // 0
console.log(sum(2, 3, 5)) // 10

