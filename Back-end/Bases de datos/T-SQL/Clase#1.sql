--CLASE#1: LEER DATOS
--T-SQL NO DISTINGUE MAYÚSCULAS DE MINÚSCULAS (SÓLAMENTE) PARA LAS SETENCIAS,
--ES DECIR, PARA PALABRAS RESERVADAS. PARA LO DEMÁS SÍ.

/*
NOTA#1:
	Si tenemos varias sentencias, y no las queremos ejecutar todas,
	seleccionamos las sentencias que queremos ejecutar,
	y le damos click a ENTER, o teclamos ALT+X.
*/

--1.- OBTENES TODOS LOS DATOS DE UNA TABLA:
/*select *
from Users*/

--2.- FILTRAR DATOS POR COLUMNAS:
/*select id, DisplayName, Reputation
from Users*/

--3.- PASAMOS CONDICIONES CON WHERE (MIENTRAS):
/*select id, DisplayName, Reputation
from Users*/
/*where Reputation = 1 */ --OBTENEMOS TODOS LOS CAMPOS CON REPUTATION IGUAL A 1
/*where Reputation <> 1*/ -- <> SIGNIFACA "DISTINTO DE". OBTENEMOS LOS CAMPOS CON REPUTATION DISTINTO DE 1
/*
NOTA#2:
	EN T-SQL TAMBIÉN SE PUEDE USAR != "PARA DISTINTO DE", PERO NO ES LENGUAJE SQL STANDARD.
*/
/*where Reputation > 1*/ --OBTENEMOS TODOS LOS CAMPOS CON REPUTATION MAYOR A 1
/*where Reputation < 1000*/ --OBTENEMOS TODOS LOS CAMPOS CON REPUTATION MENOR A 1

--4.- USO DE OR Y AND
select id, DisplayName, Reputation
from Users
--where Reputation = 1 or Reputation = 10

--5.- LA SINTAXIS "IN" SIMPLIIFICA LA SENTENCIA ANTERIOR DE "OR"
--where Reputation in (1, 5, 10)

--6.- "NOT IN" LOGRA LO CONTRARIO QUE "IN"
--where Reputation not in (1, 5, 10)

--7.- PARA OBTENER DATOS QUE ESTÉN ENTRE [POS1, POS2] USAMOS "BETWEEN POS1 AND POS2"
--where Reputation between 1 and 5

--8.- FILTROS DE TEXTO: LIKE %STRING | STRING% | %STRING%

/*where DisplayName like 'user%'*/ --OBTENEMOS TODOS LOS QUE COMIENZAN POR "user"
/*where DisplayName like '%user%'*/ --OBTENEMOS TODOS LOS QUE CONTENGAN "user"
/*where DisplayName like '%user'*/ --OBTENEMOS TODOS LOS QUE TERMINAN CON "user"

--9.- ENLAZANDO CONDICIONALES:
--where DisplayName like 'user%' and Reputation between 1000 and 10000
where DisplayName like 'user%' or Reputation between 1000 and 10000