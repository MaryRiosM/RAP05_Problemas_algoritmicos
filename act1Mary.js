
opcion = Number (prompt('Ingrese el numero de la figura a la cual desea calcularle el perimetro y el area;1_Triangulo, 2_Rectangulo, 3_cuadrado, 4_circulo'));

a=0
b=0 
c=0
h=0

if (opcion == 1){
	a= Number (prompt('Ingrese el valor de lado a para el triangulo'))
	b= Number (prompt('Ingrese el valor de lado b para el triangulo')) 
	c= Number (prompt('Ingrese el valor de lado c para el triangulo'))
	h= Number (prompt('Ingrese el valor de lado h para el triangulo')) 

	r_perimetro = a+b+c
	r_area = b*h/2

	console.log('Eligio el triangulo');	
	console.log('El perimetro del triangulo es ', r_perimetro); 
	console.log('El area del triangulo es ', r_area);	
}
	

if (opcion == 2){
	a= Number (prompt('Ingrese el valor de lado a para el rectangulo'))
	b= Number (prompt('Ingrese el valor de lado b para el rectangulo')) 

	r_perimetro = 2*(a+b)
	r_area = a*b		

	console.log('Eligio el rectangulo');	
	console.log('El perimetro del rectangulo es ', r_perimetro); 
	console.log('El area del rectangulo es ', r_area); 
}

if (opcion == 3){
	a= Number(prompt('Ingrese el valor del lado a calcular para el cuadrado'))

	c_perimetro = 4*a
	c_area = a*a

	console.log('Eligio el cuadrado');	
	console.log('El perimetro del cuadrado es ', c_perimetro); 
	console.log('El area del cuadrado es ', c_area); 
}


if (opcion == 4){
	r=0
	pi= Math.PI
	r= Number (prompt('Ingrese el valor del radio para calcular el circulo'))

	c_perimetro = 2*pi*r
	c_area = pi* (r*r)
		
	console.log('Eligio el circulo');	
	console.log('El perimetro del circulo es ', c_perimetro); 
	console.log('El area del circulo es ', c_area); 
}

if (opcion < 1 || opcion > 4 ) {
	console.log('No existe figura');	
}