
//SPREAD con array
let parte = ['los', 'cumplas'];
let oracion = ['Que', ...parte, 'feliz'];

console.log(oracion);

//SPREAD con objetos
let auto={marca:'Ferrari', km:0, anio:2019};
let corredorUno ={nombre:'Vettel', edad: 32, ...auto};


console.log(corredorUno);

//SPREAD en una funcion

function ConVariosParametros(...params){
    //codigo a ejecutar
}

ConVariosParametros("a");
ConVariosParametros("a","b");
//.