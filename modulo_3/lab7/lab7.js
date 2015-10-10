/* Uso de funciones, variables y estructuras de control */

/* FUNCION PARA COMPARAR DOS NUMEROS Y DE ACUERDO A ESO HACER UNA OPERACION
var a, b, c;


function sumar(a, b)
{

	alert("El primer numero es: " + a);
	alert("El segundo numero es : " + b);
	
	
	if (a > b)
		
		{
			c = a + b;
			alert("La operaciòn es suma, y el resultado es : " + c);
						
			
		}
		
		else if (a < b)
		
		{
			c = a * b;
			alert("La operaciòn es multiplicaciòn, y el resultado es : " + c);
						
			
		}
		
		else if (a = b)
		
		{
			c = a / b;
			alert("La operaciòn es divisiòn, y el resultado es : " + c);
						
			
		}
}
	
sumar(11,9);


OTRA FORMA DE HACERLO PIDIENDO DATOS POR CONSOLA */

var a, b, result, operations;

a = prompt('Indique el primer valor');
b = prompt('Indique el segundo valor');

operations = function(a, b){
	if(a > b){

		result = parseInt(a) + parseInt(b);
	} 
	
	else if (a < b){

		result = parseInt(a) * parseInt(b);

	} else {

		result = parseInt(a) / parseInt(b);
	}

	alert('El resultado es: ' +result);
};

operations(a, b);
