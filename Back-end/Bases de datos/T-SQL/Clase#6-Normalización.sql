create table Articulos(
CodArticulos int not null primary key,
NombreArticulo varchar(50) not null,
PrecioArticulo decimal(9,2) null
)

create table Clientes(
NumCliente int not null primary key,
NombreCliente varchar(50) not null,
TipoVia varchar(50) not null,
NombreVia varchar(50) not null,
NumVia int not null,
CP int not null,
NombreCiudad varchar(50) not null,
)

create table Facturas(
NumFactura int not null primary key,
Fecha date not null,
NumCliente int not null,
constraint FK_Facturas_Clientes foreign key (NumCliente) references Clientes(NumCliente)
)

create table DetalleFactura(
NumFactura int not null,
NumLInea int not null,
CodArticulos int not null,
Cantidad int not null,
constraint PK_DetalleFactura primary key (NumFactura, NumLInea),
constraint FK_DetalleFactura_Facturas foreign key (NumFactura) references Facturas(NumFactura),
constraint FK_DetalleFactura_Articulos foreign key (CodArticulos) references Articulos(CodArticulos)
)