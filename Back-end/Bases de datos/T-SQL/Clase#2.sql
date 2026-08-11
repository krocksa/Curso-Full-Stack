--CLASE#2: ORDENAR Y AGRUPAR DATOS

--select DisplayName, count(id)
--select Reputation, count(id)
--from Users
--where DisplayName like '%user' and Reputation < 1000
--El filtro de arriba lo podemos borrar tranquilamente, ya que, el mismo es opcional.


--2.- Ordenar: Por defecto, el ordenamiento viene asecendente
/*order by Reputation asc*/ --Ordenamos por Reputaion ascendente
/*order by Reputation desc*/ --Ordenamos por Reputaion descendente
/*order by Reputation, DisplayName*/ --Ordenamos por varios criterios de ordenamiento

--3.- AGRUPAR:
--Si vamos a agrupar debemos seleccionar una columna,
-- y su respectiva función de agrupación
--group by DisplayName
--group by Reputation
----Si vamos a ordenar ahora los campos, debemos usar la función de agrupación
--order by count(id) desc

--4.- Obtener promedios y picos:
--select AVG(Reputation) --La media
--select MAX(Reputation) --La máxima
--select MIN(Reputation) --La mínima
--from Users

select DisplayName, AVG(Reputation), count(1)
from Users
group by DisplayName
having count(1) = 1 --Filtra por las ops. WHERE filtra sobre la tabla.
order by AVG(Reputation) desc