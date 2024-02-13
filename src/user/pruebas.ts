


// TIPOS BASICOS DE TIPADO DE DATOS 

//tipado para numeros

let edad: number = 0;


//tipado para strings de cadenas de textos

let nombre: string = "Bladimir";


//tipado para booleanos

let activo: boolean = true;



// TIPOS DE ESTRUCTURAS DE DATOS

//arreglo de números
let numeros: number[] = [1, 2, 3, 4, 5];

//arreglo de cadenas de textos
let colores: string[] = ["rojos", "verde", "azul"];

//objecto con tipos especificos
let persona: {
    nombre: string,
    apellido: string,
    edad: number,
    activo: boolean
} = {
    nombre: "Bladimir",
    apellido: "Gongora",
    edad: 25,
    activo: true
}


//TIPOS DE FUNCIOENES 

//funcion con tipos de parametros y tipo de retorno 
function sumar(a: number, b: number): number {
    return a + b;
}
let resultado: number = sumar(3, 4);

//funcion con tipos de parametros y tipo de retorno 

//EL SIGNO ? EN EL PARAMETRO DE APELLIDO ES PARA QUE SEA OPCIONAL ENVIAR EL APELLIDO.
//SI SE ENVIA EL APELLIDO ENTONCES SE VALIDA PARA CONCATENAR EL APELLIDO CON EL NOMBRE
function saludar(nombre: string, apellido?: string): string {
        if (apellido) {
            return `Hola ${nombre} ${apellido}!`;
            
        } else { 
            return `Hola ${nombre}`;
        }
    }
    let saludo: string = saludar("Bladimir");