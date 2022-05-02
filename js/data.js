const iconsArray = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'purple'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'purple'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'purple'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'purple'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

let container = document.querySelector(".container");
const filter = document.getElementById("filter");
console.log(filter);

// iconsArray.forEach(element => {
	
// 	const thisName = element.name.toUpperCase();
	
// 	container.innerHTML += `<div class="icon-box"><div class="icon ${element.color}"><i class="${element.family} ${element.prefix}${element.name}"></i></div><h2>${thisName}</h2></div>`
	
// });

const animalsIcons = iconsArray.filter((element) => element.type === "animal");
const vegetablesIcons = iconsArray.filter((element) => element.type === "vegetable");
const userIcons = iconsArray.filter((element) => element.type === "user");

filter.addEventListener("click", function() {

	container.innerHTML = "";

	if (filter.value === "all") {

		iconsArray.forEach(element => {
			const thisName = element.name.toUpperCase();
			container.innerHTML += `<div class="icon-box"><div class="icon ${element.color}"><i class="${element.family} ${element.prefix}${element.name}"></i></div><h2>${thisName}</h2></div>`
		});
	} else if (filter.value === "animals") {

		animalsIcons.forEach(element => {
			const thisName = element.name.toUpperCase();
			container.innerHTML += `<div class="icon-box"><div class="icon ${element.color}"><i class="${element.family} ${element.prefix}${element.name}"></i></div><h2>${thisName}</h2></div>`
		});
	} else if (filter.value === "vegetables") {

		vegetablesIcons.forEach(element => {
			const thisName = element.name.toUpperCase();
			container.innerHTML += `<div class="icon-box"><div class="icon ${element.color}"><i class="${element.family} ${element.prefix}${element.name}"></i></div><h2>${thisName}</h2></div>`
		});
	} else {

		userIcons.forEach(element => {
			const thisName = element.name.toUpperCase();
			container.innerHTML += `<div class="icon-box"><div class="icon ${element.color}"><i class="${element.family} ${element.prefix}${element.name}"></i></div><h2>${thisName}</h2></div>`
		});
	}
})




