let vector_1=[3,25,43,56,90]
let vector_2=[11,22,87,90,99]
let vector_ordenado=[]

indice_v1=0
indice_v2=0


for (i=1; i<= 10; i=i+1) {
	
	if (vector_1[indice_v1] < vector_2[indice_v2]){
		vector_ordenado.push(vector_1[indice_v1])
		indice_v1 = indice_v1 + 1
	}
				
	else {
		vector_ordenado.push(vector_2[indice_v2])
		indice_v2 = indice_v2+1
	}
	
}

alert(vector_ordenado);

