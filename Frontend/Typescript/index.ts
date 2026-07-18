//1.- Tipos

let nombre: string = "Roger";
let edad: number = 34;
let precio: number = 99.95;
let activo: boolean = true;
let nulo: null = null;
let indefinido: undefined = undefined;
let datoCualquiera: any = "gol";
datoCualquiera = true;
let desconocido: unknown = "gol";

function saludar(): void {
  console.log("Hola");
}

function error(): never {
  throw new Error("Error");
}

/* console.log(`Hola, mi nombre es ${nombre}, tengo ${edad}.`); */

//2.- Funciones

function sumar(a: number, b: number): number {
  return a + b;
}

const restar = function (a: number, b: number): number {
  return a - b;
};

const producto = (a: number, b: number): number => {
  return a * b;
};

function saludo(nombre?: string) {
  console.log(`Hola ${nombre}`);
}

let resultado = sumar(1, 5);
/* console.log(`El resultado de la suma es: ${sumar}`); */

//3.- Objetos

let usuario: { readonly nombre: string; edad: number; saludar: () => string } =
  {
    nombre: "Roger",
    edad: 34,
    saludar: () => {
      return `Hola, soy ${nombre} y tengo ${edad} años de edad.`;
    },
  };

//4.- Arrays

let numeros: number[] = [1, 2, 3];
let nombres: Array<string> = ["Roger", "Francisca", "Yorgelis"];
let mezcla: (string | number)[] = [22, "Hola"];
let arrayEspecífico: [string, number] = ["Roger", 24]; //No acepta más valores, ya que definimos una cantidad, tipos y orden de valores específico.

//5.- Alias en Tipos

/* Forma 1:
type Usuario = {
  nombre: string;
  edad: number;
}; */

/* Forma 2: 
interface Usuario {
  nombre: string;
  edad: number;
}
*/

let user: Usuario = {
  nombre: "Roger",
  edad: 34,
  genero: "Masculino",
  /*  rol: {
    rol: "Admin"
  } */
  rol: "Admin",
};

let user1: Usuario = {
  nombre: "Francisca",
  edad: 56,
  genero: "Femenino",
  /*  rol: {
    rol: "Dueña"
  } */
  rol: "Dueña",
};

let user2: Usuario = {
  nombre: "Yorgelis",
  edad: 29,
  genero: 2,
  /*  rol: {
    rol: "Admin"
  } */
  rol: "Admin",
};

let user3: Usuario = {
  nombre: "Caramelo",
  edad: 27,
  genero: undefined,
  /*  rol: {
    rol: "Bandid@"
  } */
  rol: "Bandid@",
};

//6.- Unión de tipos | Composición
interface Usuario {
  nombre: string;
  edad: number;
  genero: number | string | undefined;
  rol: Rol;
}

/* Forma ineficiente
 type Rol = {
  rol: string;
};
 */

//Forma ificiente:
type Rol = "Dueña" | "Admin" | "Bandid@" | "";

//7.- Diferencias entre Type e Interface
//00:35:50
