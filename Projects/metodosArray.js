// var alumno = ["Leo", "bar", "roco", "rob"];
// var suma = [10,2,4,9]
var numbers = [1, 2, 3];
let notas =[10,4,5,8,9,2,7];

// //EJEMPLO DE .MAP
// var doubles = numbers.map(number =>(number * 2));    //dobles con arrow
// let elDoble = numbers.map(function(num){return num *2});  //dobles con sintaxis normal
// console.log("Ejemplo de .map. :",doubles,elDoble);


// let horariosPartida = [12, 14, 18, 21];
// let horariosAtrasados = horariosPartida.map (function(num){return num - 1});
// console.log(horariosAtrasados);



// let notasHastaEl10 =notas.map(function(numero){
//     return numero =10; });
// console.log(notasHastaEl10)



// //FILTER   SIN RESOLVER!!!
// let notasAprobadas =notas.filter(function(numero){
//     return numero>=7;
//     });
//     console.log("Ejemplo de .filter. :", notasAprobadas);

//EJEMPLO QUE NO ANDA FILTER + JSON

let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
];

let aprobados=estudiantes.filter(function(estudiantes.aprobado){
    return estudiantes.aprobado==true
    });console.log('ejemplo filter :' + aprobados);



//INTENTO CON JSON - NO ANDA
let estudiantes2 = [{nombre:"John"},{nombre:"Gus"},{nombre:"Vic"}];
let aprobados=estudiantes2.filter(function(nombre){
    return estudiantes2.nombre=="Vic"
    });console.log('ejemplo filter :' + aprobados);

 // Filtro con un Array normal   
    // let estudiantes2 = ["John","Gus","Vic"];
    // let aprobados=estudiantes2.filter(function(nombre){
    //     return nombre=="Vic"
    //     });console.log('ejemplo filter :' + aprobados);



//EJEMPLO REDUCE
// let sumaNotas =notas.reduce(function(estado,numero){
//     return estado + numero;
// });
// console.log('ejemplo de Reduce: ' + sumaNotas);



// let vueltas = [5, 8, 12, 3, 22];
// let totalVueltas = vueltas.reduce(function(estado,numero){return estado + numero});
// console.log (totalVueltas);


//EJEMPLO FOR EACH
notas.forEach(function(valor,indice){
console.log("En la posicion "+ indice +  " tengo el valor " + valor );
})

let listaDeSuperMercado = [
    'Bife de chorizo',     'Coca Cola',     'Bananas',     'Lechuga',     'Chimichurri', 
    'Lata de tomates',     'Arvejas',     'Cereales',     'Pechuga de pollo',     'Leche'
];
listaDeSuperMercado.forEach(function(valor,indice){
  console.log(valor)  
});


//
listaDeSuperMercado.forEach()valor,indice)=>{
if (valor =="Banana"){
    console.log( `${valor}`)
}
};
//.
