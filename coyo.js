var array;

function cargarpagina(){
     array =[  // Esto es un array
        {nombre:"Hector", codigo:"192062", doc:"1092730251", prog:"Ing. Sistemas"},
        {nombre:"Luis", codigo:"192062", doc:"1092730251", prog:"Ing. Sistemas"},
        {nombre:"Arenas", codigo:"192062", doc:"1092730251", prog:"Ing. Sistemas"}
    ];
    console.log(array);
}

function calcular(){
    let nombre = $("#nombre").val();
    console.log(nombre);
    for(let i=0; i<array.length; i++) {
        console.log(array.length);
        if(nombre==array[i].nombre){
            console.log("EL NOMBRE ECONTRADO ES: " + nombre);
            break;

        }
        else{
            console.log("SU NOMBRE " +nombre+ "NO FUE ENCONTRADO");
        }
        
    }
}