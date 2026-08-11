-- Clase#3.- Insertar datos en una tabla

--Esto quedó de la clase anterior. Eligir una cantidad exacta de datos:
--select top(10) id, DisplayName, Reputation
--from Users
--order by Reputation desc

--AHORA SÍ VAMOS CON LA CLASE DE HOY:
--1.- Insertar datos en una tabla nueva (que no existe, valga la redundancia)
--select top(10) id, DisplayName, Reputation
--into Usuarios
--from Users
--order by Reputation desc

--2.- Insertar datos en una tabla que ya existe:
--Como creamos la tabla crea con un campo auto numérico, no hace falta incluir "id" en la sentencia.
insert into Usuarios(DisplayName, Reputation)
select top(10) DisplayName, Reputation
from Users
order by Reputation asc