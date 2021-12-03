let users = {
	name: 'Marta',
	lastName: ' Silva',
	age: 34,
	medals: {
		golden: 2, silver: 3
	},
	bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]
}

console.log('A jogadora ' + users.name + users.lastName + ' tem ' + users.age + ' anos de idade.');
console.log('A jogadora Marta foi eleita a melhor do mundo por ' + users.bestInTheWorld.length + ' vezes.');
console.log('A jogadora possui ' + users.medals.golden + 'medalhas de ouro e ' + users.medals.silver + ' medalhas de prata');