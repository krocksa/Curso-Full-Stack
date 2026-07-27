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
//Las interfaces trabajan con herencia (POO)
//Las interfaces también se usan como un contrato de obligaciones
//Los Types son mejores para tipos de datos complejos
interface Persona {
  nombre: string;
  edad: number;
  genero?: string;
}

interface Empleado extends Persona {
  readonly rol: string; //No se puede modificar una vez definido
  salario: number | string;
}

let empleado: Empleado = {
  nombre: "Roger Salgado",
  edad: 34,
  rol: "Vice Presidente",
  genero: "Masculino",
  salario: "Impresionante",
};

class Humano implements Empleado {
  rol: string = "";
  salario: string | number = "";
  nombre: string = "";
  edad: number = 1;
  genero?: string;
}

interface ArbolBinario {
  buscar: () => void;
}
class ArbolBinarioPersonas implements ArbolBinario {
  buscar() {}
}

class ArbolBinarioNumeros implements ArbolBinario {
  buscar() {}
}

//8.- Discriminating union
type Loading = {
  status: "Loading";
};
type Success = {
  status: "Success";
  data: string;
};
type Error = {
  status: "Error";
  message: string;
};
type Response = Loading | Success | Error;

const manejarPeticion = (res: Response) => {
  if (res.status === "Loading") {
    console.log("Cargando");
  } else if (res.status === "Success") {
    console.log(res.data);
  } else {
    console.log(res.message);
  }
};

//9.- Narrowing
//Refina un tipo de dato más amplio en varios más específicos
//cada uno dentro de un condicional.
const procesar = (valor: string | number) => {
  if (typeof valor === "number") {
    valor.toExponential(2);
  } else {
    valor.length;
    let number: number = parseInt(valor);
  }
};
procesar(1);
//valor es un tipo de dato amplio; con el narrowing, lo pudimos
//convertir en un tipo de dato diferente, específico y seguro
//dentro de cada condicional.

type Perro = { ladrar: () => void };
type Gato = { maullar: () => void };

const hacerSonido = (animal: Perro | Gato) => {
  if ("ladrar" in animal) {
    animal.ladrar();
  } else if ("maullar" in animal) {
    animal.maullar();
  }
};

function fecha(valor: Date | String) {
  if (valor instanceof Date) {
    valor.getDay();
  } else if (valor instanceof String) {
    valor.concat();
  }
}

const ejemplo = (x: string | null) => {
  if (x === null) return;
  console.log(x.toUpperCase());
};
//10.- Type guards
const esString = (valor: unknown): valor is string => {
  return typeof valor === "string";
};
//Se asegura que el tipo de dato sea el que deseamos.
const usar = (valor: unknown) => {
  if (esString(valor)) {
    console.log(valor.toUpperCase());
  }
};

//Primero definimos los tipos
type isSuccess = { data: string };
type isError = { error: string };

//Luego nos aseguramos de que siempre sea Success
const esSuccess = (res: isSuccess | isError): res is isSuccess => {
  return "data" in res;
};

//Finalmente manejamos los dos escenarios (Success | Error)
const manejar = (res: isSuccess | isError) => {
  if (esSuccess(res)) {
    console.log(res.data);
  } else {
    console.log(res.error);
  }
};

//11.- Literal Types

//Definimos un tipo (puede ser casi que cualquiera)
//Si le colocamos dicho tipo a una variable
//La misma sólo puede recibir los valores
//definidos en dicho tipo
type Direccion = "izquierda" | "derecha";
let mover: Direccion = "derecha";
//Si a "mover" le intentamos pasar un valor diferente
//a los definidos en "Direccion" el sistema arroja error.

const configTema = {
  modo: "oscuro",
} as const;
//as const, lo que hace es que configTema sea tratado como un tipo,
//de esa forma su valor aparece como readonly
//si le quitamos el as const, ya es un objeto común,
//su valor es del tipo de dato general definido(por ejemplo: string),
//y el mismo puede ser cambiado.

//12.- Enums

enum Direcciones {
  Arriba = 1,
  Abajo,
  Izquierda,
  Derecha,
}
let moverse: Direcciones = Direcciones.Abajo;
console.log(moverse);
//Nos devuelve la posición en la que está definida Arriba
//Comenzando por el 0 como la primera posición.
//Lo que nos crea es un array de números,
//pero con valor semántico (Mucho más fácil de leer)
//Existe la posibilidad de que en vez de números,
//les definamos valores que reemplacen a dichos números,
//puede ser con otros números, o con otros tipos de valores,
//pero esto es más tedioso.

//13.- Tipados de callback

//Se tipan funciones pasándoles como parámetro otra función
//Estas funciones que reciben funciones como parámetro,
//Se denominan "Funciones callback".

const funcionesDentroDeFunciones = (callback: (message: string) => void) => {
  callback("Hola Mundo!");
};

funcionesDentroDeFunciones((msj) => {
  console.log(msj);
});

//14.- Genéricos, Restricciones y keyof

/* const identidad = <T>(a: T) => {
  return a;
}; */
function identidad<T>(a: T) {
  return a;
}
//La idea es que en tiempo de escritura,
//definamos el tipo de dato que aceptará la función,
//para evitar errores/ambigüedades

identidad(1); //Puede generar ambigüedades
identidad<number>(1); //Esta es la forma correcta
identidad<string>("Esta es la forma correcta de usar los tipos genéricos.");

//Otro ejemplo:

type Product = {
  id: number;
  name: string;
  price: number;
};

type User = {
  id: number;
  name: string;
};

type Cart = {
  total: number;
  products: Product[];
};

type Pagination<T> = {
  page: number;
  nextPage: number;
  previousPage: number;
  data: T[];
};

//En vez de reescribir código, usamos Generics

/* type PaginationUsers = {
  page: number;
  nextPage: number;
  previousPage: number;
  data: User[];
};
 */

//Ahora con la misma función genérica,
//podemos acceder a distintos tipos de datos.

function getProducts(): Pagination<Product> {
  return {
    page: 1,
    nextPage: 2,
    previousPage: 0,
    data: [
      {
        id: 1,
        name: "I Phone 17 Pro Max",
        price: 1200,
      },
      {
        id: 2,
        name: "Samsung Galaxy S26 Ultra",
        price: 1200,
      },
    ],
  };
}

function getUsers(): Pagination<User> {
  return {
    page: 1,
    nextPage: 2,
    previousPage: 0,
    data: [
      {
        id: 1,
        name: "Roger Salgado",
      },
      {
        id: 2,
        name: "Francisca Mendoza",
      },
    ],
  };
}

function getCarts(): Pagination<Cart> {
  return {
    page: 1,
    nextPage: 2,
    previousPage: 0,
    data: [
      {
        total: 0,
        products: [],
      },
    ],
  };
}
//Ahora veamos las Restricciones:
//Forzamos a que ciertos métodos/características,
//existan dentro de nuestro genérico.
function longitud<T extends { length: number }>(valor: T) {
  return valor.length;
}

longitud("Yo poseo el método length");
longitud({ length: 1 });
//Los valores que le pasamos a la función,
//deben incluir el método length,
//o se lo definimos a mano

//Veamos keyof:

const obtenerPropiedad = <T, K extends keyof T>(obj: T, key: K) => {
  return obj[key];
};
//keyof nos lista las propiedades de T dentro de K.
//En nuestro ejemplo, tenemos que key,
//tiene ser una clave/método/etc de T.

console.log(obtenerPropiedad({ id: 1, name: "Roger Salgado", age: 34 }, "age"));
//Le pasamos un objeto, seguido de una de las claves del obejo
//Por consola nos devuelve el valor de dicha clave.
//Valida y evita ambigüedades en tiempo de escritura.

let usuario1: User = {
  id: 1,
  name: "Roger Salgado",
};
type Key = keyof typeof usuario1;
//Para poder usar "usuario1" como un tipo en el tipo Key,
//le colocamos typeof para que typescript analice "usuario1",
//extraiga su estructura,
//y la convierta en un tipo de la forma:
//{id: number; name: string;}
//Ahora seguimos usando keyof normalmente.

let keyUser: Key = "id";
//Ahora mostramos por pantalla el valor de dicha clave:
//console.log(usuario1[keyUser]);

const arrWithGenerics = <T>(arr: T[]): T[] => {
  return arr;
};

let frutas: string[] = arrWithGenerics<string>(["Manzana", "Pera", "Cambur"]);

/* console.log(frutas);

frutas.forEach((fruta) => {
  console.log(fruta);
}); */

//15.- Mapped types
//Mapear tipos con "in"

type Usuarrio = {
  nombre: string;
  edad: number;
  direccion: string;
  sexo: "Masculino" | "Femenino";
};

type Optional = {
  [K in keyof Usuarrio]?: Usuarrio[K];
};

//16.- Utily types
//Manera más fácil de mapear tipos

type Userr = {
  nombre: string;
  edad: number;
  direccion: string;
  sexo: "Masculino" | "Femenino";
};

type Optionaal = Partial<Userr>;
//Hace que todos los campos sean opcionales

type Requirido = Required<Optionaal>;
//Hace que todos los campos sean obligatorios

type SoloLectura = Readonly<Optionaal>;
//Hace que todos los campos sean de sólo lectura

type SoloDireccion = Pick<Usuarrio, "direccion" /* | "edad" */>;
//Crea un tipo con las claves que le indiquemos,
//tomando claves de otro tipo complejo.

type OmitirDireccion = Omit<Usuarrio, "direccion" /* | "edad" */>;
//Crea un tipo omitiendo las claves que le indiquemos,
//tomando claves de otro tipo complejo.

type Result = Promise<Usuarrio[]>;

type PromesaEsperada = Awaited<Result>;
//Extrae el valor de la promesa, si hay promesas anidadas,
//va hasta el final y extrae todos los valores de las promesas.

//17.- Conditional types

type EsString<T> = T extends string ? true : false;
type Prueba = EsString<"Hola">;

//18.- Infer
//Es como hacer el Awaited, pero a mano.
type Extraer<T> = T extends Promise<infer U> ? U : T;
type Resultt = Promise<Usuarrio[]>;
type Usuarrios = Extraer<Resultt>;

type ObtenerRetorno<T> = T extends () => infer R ? R : never;
type ReturnType = ObtenerRetorno<1>;
type ReturnType1 = ObtenerRetorno<() => string[]>;

//19.- Template Literals

type Color = "red" | "blue";
type Clase = `bg-${Color}`;

//20.- POO

class Personaa {
  protected nombre: string;
  public edad: number;

  //Constructor
  public constructor(nombre: string, edad: number) {
    this.edad = edad;
    this.nombre = nombre;
  }

  //Métodos
  public getInfo(): void {
    console.log({
      nombre: this.nombre,
      edad: this.edad,
    });
  }
}

//Herencia
class Useerr extends Personaa {
  //Atributos
  private correo: string;

  //Sobreescritura de Métodos heredados
  public getInfo(): void {
    console.log({
      nombre: this.nombre,
      edad: this.edad,
      correo: this.correo,
    });
  }

  //Constructor heredado
  public constructor(nombre: string, edad: number, corro: string) {
    super(nombre, edad);
    this.correo = corro;
  }

  //Getters y Setters
  /*Forma tradicional:
   setCorreo(correo: string) {
    this.correo = correo;
  }
  getCorreo() {
    return this.correo;
  } */
  //Lo nuevo de Js:
  get _correo() {
    return this.correo;
  }
  set _correo(correo: string) {
    this.correo = correo;
  }
}
const roger = new Useerr("Roger", 34, "rogeryonatan@gmail.com");
/* roger.getInfo();
//roger.setCorreo("krocksalgado@gmail.com");
//roger.getInfo();
console.log(roger._correo);
roger._correo = "krocksalgado@gmail.com";
console.log(roger._correo); */

//Atributos y métodos estáticos
class UserEstatic {
  public static countUsers: number = 0;
  public name: string;
  public age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    /* this.countUsers += 1; //Esto ahora es incorrecto */
    UserEstatic.countUsers += 1;
  }

  public static esMayorDeEdad(user: UserEstatic): boolean {
    if (user.age >= 18) {
      return true;
    } else {
      return false;
    }
  }
}
//Como los atributos y métodos se inicializan de cero
//para cada objeto, el countUsera siempre va a iniciar de cero
//cada vez que se cree una instancia (objeto)
//y por eso, sólo se incrementa en 1 para cada objeto.

/* LA SOLUCIÓN? ¡STATIC! */

//Ahora countUsers sólo existe a nivel de clase,
//y cada instancia es su incremental,
//por eso es que no se puede acceder a él desde las instancias,
//ya que, precisamente son las instancias las que lo incrementan

const krocksa = new UserEstatic("Krocksa", 34);
/* console.log(krocksa.countUsers);//INCORRECTO */
const pancha = new UserEstatic("Panchita", 56);
const malandrina = new UserEstatic("Juliana", 3);
/* console.log(pancha.countUsers);//INCORRECTO */
console.log(UserEstatic.countUsers);
//Ahora cada vez que se crea una instancia,
//countUsers se incrementa en 1.
console.log(UserEstatic.esMayorDeEdad(malandrina));

//Clases abstractas === extends
//Interfaces como contratos === implements

//Patrón adaptador
/* interface Auth {
  login: (email: string) => boolean;
  logout: () => void;
}
 */
abstract class Auth {
  abstract login(email: string): boolean;
  abstract logout(): void;
}

class AuthConGoogle /* implements */ extends Auth {
  login(email: string) {
    const db2 = ["kroxksa@gmail.com", "roger@gmail.com"];
    return db2.includes(email);
  }

  logout() {
    console.log("Cerrando sesión.");
  }
}

class AuthConDiscord /* implements */ extends Auth {
  login(email: string) {
    const db2 = ["kroxksa@gmail.com", "roger@gmail.com", "pancha@gmail.com"];
    return db2.includes(email);
  }
  logout() {
    console.log("Saliendo de Discord.");
  }
}

const authGoogle = new AuthConGoogle();
const authDiscord = new AuthConDiscord();

const navbar = (auth: Auth) => {
  auth.login("roger@gmail.com");

  auth.logout();
};

navbar(authDiscord);

//21.- Promesas y Asincronía

/* const sleep = (delay: number) => {
  return new Promise((resolve) => {
    return setTimeout(resolve, delay);
  });
}; */

/* Una forma que no es una buena práctica de programación:
 const getPokemon = async () => {
  const pokemon = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  throw new Error("Error de conexión");
};

const main = async () => {
  try {
    const pokemon = await getPokemon();
    console.log(pokemon);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("El finally siempre se ejecuta");
  }
  console.log("Bloque finalizado.");
};

main(); */

/* La forma correcta (con buenas prácticas de programación) */

const getPokemon = async () => {
  const pokemon = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");

  if (!pokemon.ok) {
    throw new Error(`Error HTTP: ${pokemon.status}`);
  }
  const data = await pokemon.json();
  return data;
};

const main = async () => {
  try {
    const pokemon = await getPokemon();
    console.log(pokemon);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  } finally {
    console.log("El finally siempre se ejecuta");
  }
  console.log("Bloque finalizado.");
};

main();
