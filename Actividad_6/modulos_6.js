//MÓDULO 1

var ten = 10; //variable
console.log(ten*ten) //Para ejecutar

var numbers = [5, 10, 15, 20, 25]; //lista
var names = ["Claudio", "Osvaldo", "Vaness"];
numbers[2] //Devuelve un 15

var fruits = {
    kind: "grape",
    color: "green",
    quantity: 12,
    tasty: true
}; //objeto, solo guarda info, like the python´s one

fruits.kind //entrega "grape"
fruits.color //entrega "green"
fruits.quantity //entrega 12
fruits.tasty //entrega true

//arreglos de objetos -> muchos objetos en como una lista

var frutas = [
    {
        kind: "grape",
        color: "green",
        quantity: 12,
        tasty: true
    },
    {
        kind: "kiwi",
        color: "brown",
        quantity: 4,
        tasty: true
    },
    {
        kind: "apple",
        color: "red",
        quantity: 98,
        tasty: true
    }
];

//las relaciones son las siguientes:

frutas[0].kind == "grape"
frutas[0].color == "green"
frutas[0].quantity == 12
frutas[0].tasty == true

frutas[1].kind == "kiwi"
frutas[1].color == "brown"
frutas[1].quantity == 4
frutas[1].tasty == true

frutas[2].kind == "apple"
frutas[2].color == "red"
frutas[2].quantity == 98
frutas[2].tasty == true

//variable JSON -> lo mismo que un objeto, pero los ATRIBUTOS son strings

var jsonFruit = {
    "kind": "grape",

};

//MODULO 2

//los comparadores de javascript son los mismos que en python

//if y else

var edad = 23;
var nombre = "Luis";

if (edad < 18){
    console.log(nombre + " es menor de edad");
}
else if (edad >= 21){
    console.log(nombre + " es mayor de edad internacionalmente");
}
else {
    console.log(nombre + " es mayor de edad");
}

//for, no es el mismo

for (initialization; TextDecoderStream; update) {
    //Code to run each time through the loop
};

for (var i = 0; i < 5; i++){
    console.log(i); //Printea los valores en la consola (0 al 4)
};

//funciones

var square = function(x){
    return(x * x);
};

var makeNoise = function(){
    console.log("Pling!");
}; 
 
makeNoise(); //llamar la funcion

//referencias
//para referenciar se debe crear una carpeta dentro de la carpeta en 
//donde se encuentren los archivos html y css

//referecnia en el html
//<head>
//  <title>Page Title</tite>
//  <script type="text/javascript" src="myscript.js"></script>
//</head>

//otra forma:
//<body>
//  <script type="text/javascript">
//      alert("Hello, world!");
//  </script>
//</body>

//MODULO 3

//jquery
//en el archivo html
//<h1 id="titutlo"> Visualizacion de pobreza en Chile </h1>

//en el javascript
var title = $("#titulo")
//forma general: $(selector).accion(...)

//ej
var titleId = $("h1").attr("id") //retorna titulo

//se debe importar la libreria jquery
$(document).ready(function(){
//...    
};

//MODULO 4

//funciones para interactuar con la página
$(selector).attr(nombre_del_atributo) //obtiene un atributo del elemento
//seleccionado y lo guarda en una variable
//ej
$("#circulo").attr("radio") //se busca el radio del ID circulo

//fns relacionadas con el texto de un contenedor
$(selector).text("texto_a_setear")

$(selector).append("texto_por_agregar")

//fns relacionadas con la entreda o salida del mouse en un elemento
$(selector).mouseenter("...") //fn para cuando entre
$(selector).mouseleave("...") //fn cuando salga
$(selector).hover("arg_entrada", "arg_salida") //combinacion de ambas fns

//fns para mostrar o esconder un elemento
$(selector).show()
$(selector).hide()

//fn para desvanecer un elemento (esconder con animacion)
$(selector).fadeTo("velocidad", transparencia) //vel == "fast" o "slow"

//fn relacionada con el clickear un elemento
$(selector).click("...") //dentro va otra fn que se ejecutará

$(selector).on("click", "...") //forma alternativa

//fns que emiten señales -> la fn retorna el objeto (del html) que la llama
//this

var seleccionado = $(this) //this: para obtener elemento seleccionado
                           //(capta la señal)
//ej
var mapa = $(".comuna"); //el punto es para todas las comunas
mapa.mouseenter(function(){
    var nombre = $(this).attr("id");
    console.log(nombre)
}); //poner el mouse sobre un lugar, y aparece el nombre

//MODULO 5
//ej de una página web


