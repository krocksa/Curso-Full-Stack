--Clase#5 Parte Gráfica

insert into Usuarios(DisplayName, Reputation)
select top(1000) DisplayName, Reputation
from Users
order by newId() --Se insertan registros aleatorios