--Clase#4: Actualizar y Borrar valores

--1.- Actualizar valores:
update Usuarios set Reputation = 100, DisplayName = 'Gokú' where id = 157886

--2.- Transacciones:
begin tran --o, "bengin transaction"
update Usuarios set Reputation = 100, DisplayName = 'Gokú' where id = 15
update Usuarios set DisplayName = 'Gohan' where id = 16
--commit
--rollback

--NOTA: Para poder ver los cambios desde otra query, debe guardarlos con el comando "commit"
------	O podemos deshacerlos con el comando "rollback"
------	Una vez ejecutado la sentencia "commit", no se puede ejecutar "rollback" para deshacer los cambios,
------	"rollback" debe ser ejecutado para deshacer los cambios antes de ejecutar la sentencia "commit"

--3.- Borrar valores:

--NOTA: NO OLVIDARSE DE COLOCAR EL "WHERE" EN EL "DELETE FROM"!!!!!!!!!!!!!

--3.1- Borrar un campo:
delete from Usuarios where id = 15

--3.2.- Borrar la información de una tabla:
delete from Usuarios --Esta no es la opción recomendada para vaciar una tabla, sino "TRUNCATE"
truncate table Usuarios --Esta es la mejor práctica de programación para este caso