let account = 5000

const person = {
  account: 10000,
  // avec le mot clé function
  work: function() {
    this.account += 1000;
  },
  // Ou en la déclarant directement
  printAccount() {
    console.log(this.account);
  }
}

person.work();
person.printAccount();

const fabio = {
	account: 7000,
}

// Ici, work perd le context de l'objet person, this sera donc undefined (car je suis sur node - window si je suis dans le navigateur)
const work = person.work

// Ici je lie la méthode work avec mon objet 'fabio'
const goToWork = person.work.bind(fabio)
goToWork()
console.log(fabio)

function introduceHero(heroName, fullname) {
	console.log(`${heroName} - identité secrète ${fullname} - entre dans l'arène. Ce dernier a une force de ${this.powerstats.strength} et une intelligence de ${this.powerstats.intelligence}.`)
}

const ironManStats = {
	bio: {
		name: 'Iron man',
		fullname: 'Tony Stark',
	},
	powerstats: {
		strength: 75,
		intelligence: 90,
	}
}

// Première solution avec call
// introduceHero.call(ironManStats, ironManStats.bio.name, ironManStats.bio.fullname)
// introduceHero.apply(ironManStats, Object.values(ironManStats.bio))
const introduceIronMan = introduceHero.bind(ironManStats)
// Object.values(ironManStats.bio) -> ['Iron man', 'Tony Stark']
// ...['Iron man', 'Tony Stark'] -> 'Iron man', 'Tony Stark'
// introduceIronMan('Iron man', 'Tony Stark')
introduceIronMan(...Object.values(ironManStats.bio))

// Iron man - identité secrète Tony Start - entre dans l'arène. Ce dernier a une force de 75 et une intelligence de 90.