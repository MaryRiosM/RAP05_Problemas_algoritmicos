vector_edades={}

menores_edad=0
mayores_edad=0
adultos_mayores=0 
edad_más_baja=120
edad_más_alta=0
suma_edades=0


for (i=1; i<=3; i=i+1){
	vector_edades [i] = Number(prompt('Ingrese la edad '));
}

for (i=1; i<=3; i=i+1){
	console.log('edad persona ', vector_edades [i]);
	
	suma_edades= suma_edades + vector_edades[i]


	if (vector_edades[i] >=1 && vector_edades[i] <=18){ 
		menores_edad = menores_edad + 1;

	}

	if (vector_edades[i] >= 18 && vector_edades[i] <=60){ 
		mayores_edad = mayores_edad + 1;
	}

	if (vector_edades[i] >= 60 && vector_edades[i] <=120){ 
		adultos_mayores = adultos_mayores + 1;
	}
	
	if (edad_más_baja > vector_edades[i]){
		edad_más_baja = vector_edades[i];
	}
	
	if (edad_más_alta < vector_edades[i]){
		edad_más_alta = vector_edades[i];
	}

	if (vector_edades[i] <1 || vector_edades[i] >120){ 
		console.log('Edad no es valida');	
	}
}

console.log('La cantidad de menores_edad es ', menores_edad);
console.log('La cantidad de mayores_edad es ', mayores_edad);
console.log('La cantidad de adultos_mayores es ', adultos_mayores);	

console.log('La edad mas baja es ', edad_más_baja);	
console.log('La edad mas alta es ', edad_más_alta);	

		
suma_edades=suma_edades/3
		
console.log('El promedio de edades es ',suma_edades );	
