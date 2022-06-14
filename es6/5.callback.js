function addVAT(number) {
	return number * 1.2;
}

const invoices = [1000, 1500, 1200, 3000];

// Pour chaque montant dans invoice, avoir un nouveau tableau avec le montant avec TVA

function personnalForEach(array, callback) {
	const newArray = [];
	for (let i = 0; i < array.length; i++) {
		const element = array[i];
		const result = callback(element);
		newArray.push(result)
	}
	return newArray
}

const invoicesWithTVA = personnalForEach(invoices, addVAT); // [1200, 1800, 1440, 3600]
console.log(invoicesWithTVA);
