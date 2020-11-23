let pokemon1 = {
	pikachu : {
		type : 'mouse pokemon',
		height : 2,
		weight : 2
	}
}

let pokemon2 = {
	raichu : {
		type : 'mouse pokemon',
		height : 3,
		weight : 3
	}
}

let weight2 = pokemon2?.raichu?.weight;
let weight1 = pokemon1?.raichu?.weight;

console.log(weight2);

console.log(weight1);