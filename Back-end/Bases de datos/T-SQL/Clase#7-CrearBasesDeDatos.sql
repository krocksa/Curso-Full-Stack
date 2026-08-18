create table MiTablaDePrueba (
id int identity,
nombre varchar(25) not null,
apellido varchar(25) not null,
FechaNacimiento date,
) on [PRIMARY]

create schema TSQLCursoFullTack --Crear una Schema

create table TSQLCursoFullTack.Mitabla(
idArticulo int identity,	
nombreArticulo varchar(25) not null,
precio decimal(5,2)
)

drop schema TSQLCursoFullTack --Borrar un Schema