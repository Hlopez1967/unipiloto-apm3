/* objetos y funciones */
var person = new Object();

var other_object = {};


person = {
	Nombre: 'Herledy',
	PrimerApellido: 'Lopez',
	SegundoApellido: 'Hernandez',
	Celular:3143314873,
	Ciudad: 'Bogottà'
};

console.log(person);
console.log(person.Nombre);

var key;

for(key in person){
	console.log(person[key]);
}