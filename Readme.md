create table tabla_clientes(
	id SERIAL  PRIMARY KEY,
	nombre VARCHAR,
	telefono VARCHAR,
	direcciones TEXT[]
);

insert into tabla_clientes(nombre,telefono,direcciones)
VALUES('nombre','70000404','{1}')

update tabla_clientes set direcciones[1] = 'direccion 22'
where id =2

select * from tabla_clientes

https://sequelize.org/docs/v6/advanced-association-concepts/creating-with-associations/#belongsto--hasmany--hasone-association