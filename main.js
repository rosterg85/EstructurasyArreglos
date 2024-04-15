/*
const frutas=['manzana','pera','uva','sandia','melon'];
console.log(frutas);
console.log(frutas.length) ;// Longitud del arreglo
frutas.push('platano');      //inserta al final
console.log(frutas);
frutas.pop();                //BORRA EL ULTIMO ELEMENTO
console.log(frutas);
frutas.shift();             // Borra el primer elemento
console.log(frutas);
frutas.unshift('platano');  // Inserta al final
console.log(frutas);
frutas.sort();               // Ordena
console.log(frutas);
frutas.reverse();               // Ordena en sentido contrario
console.log(frutas);
frutas.splice(1,2);         //splice(X,Y)borra desde el espacio X y borra Y datos a partir deesa posicion.
console.log(frutas);
frutas.splice(1,0,'platano','mango'); //splice(X,Y)borra desde el espacio X y borra Y datos a partir deesa posicion. luego adiciona platano y mango 
console.log(frutas);
const frutas2=frutas.toSpliced(1,2)
console.log(frutas2);
frutas.splice(3,0,'maracuya')
console.log(frutas);
let elemento=frutas.pop();  //pop() envia el ultimo elemento del Array
console.log(elemento);
let elemento2=frutas.shift();// shift( envia el [primer elemento del arreglo])
console.log(elemento2); 
let cadena=frutas.toString();
console.log(cadena);
let cadena2=frutas.join(' - ')
console.log(cadena2);
let cadena3=frutas.concat(frutas2);
console.log(cadena3);

console.log(cadena3);
let cadena4=cadena3.slice(1,4); /(x,y) remuevo hasta posx he imprimo hasta el objeto y
console.log(cadena4);
 
const Persona={nombre:"juan",apelliudo:"Perez",edad:20,fechaNacimiento:"20/11/1996"} 
console.log(Persona);
console.log(Persona.nombre);
console.log(Persona.apelliudo);
console.log(Persona.edad);
console.log(Persona.fechaNacimiento);
Persona.edad=21;
console.log(Persona);
Persona.edad=null;
console.log(Persona);

const arreglobidimensional=[[1,2,3],[4,5,6],[7,8,9]]
let arreglounidimensional=arreglobidimensional.flat();
console.log(arreglobidimensional);
console.log(arreglounidimensional);

// Nodos/////
class Nodo{
    constructor(valor){
        this.valor=valor;
        this.siguiente=null;
    }
}
let primero=null;

function agregarElemento(valor){
    let nuevo=new Nodo(valor);
    nuevo.siguiente=primero;
    primero =nuevo;

}
function mostrar(){
    let actual =primero;
    while(actual != null){
        console.log(actual.valor);
        actual=actual.siguiente;
    }
}
function Eliminar(){

}
const lista=new Nodo(1);
agregarElemento(15);
agregarElemento(20);
agregarElemento(25);

mostrar();
console.log(primero);
*/
//// Pilas ////

class Nodo{
    constructor(valor){
        this.valor=valor;
        this.siguiente=null;
    }
}
let primero=null;

class Pila{
    constructor(){
        this.tope=null;
    }

     agregarElementoPila(valor){
        let nuevo=new Nodo(valor);
        nuevo.siguiente=this.tope;
        this.tope =nuevo;
    
    }
    imprimir(){
        let actual=this.tope;
        while(actual !=null){
            console.log(actual.valor);
            actual=actual.siguiente;
        }
    }
}

let pila= new Pila();
pila.agregarElementoPila(15);
pila.agregarElementoPila(20);
pila.agregarElementoPila(25);
pila.imprimir();
console.log(pila);

////////////Colas////////////