import axios from 'axios'
import React, { useEffect, useState } from 'react'

const apiClientes ="http://localhost:3500/clientes";
const Table = () => {
	const [clientes,setClientes] = useState([]);
	useEffect(() => {
		listarclientes();
	},[]
	);
	const listarclientes= async () =>{
		const response = await axios.get (apiClientes);
		setClientes(response.data);
		console.log(response.data)
		console.table(response.data)
	}
  return (
<table class="table">
	<caption className='caption'>Datos Cliente</caption>
	<thead>
	<tr>
		
		<th>id</th>
		<th>Tipo Identificacion</th>
		<th>Documento</th>
		<th>Nombre</th>
		<th>Apellido</th>
		<th>Fecha Nacimiento</th>
		<th>Dirrecion</th>
		<th>Ciudad</th>
		<th>Departamento</th>
		<th>Pais</th>
		<th>Marca</th>
	</tr>
	</thead>
	<tbody>
	{clientes.map((cliente) => (
            <tr key={cliente.id}>
              <td>{cliente.id}</td>
              <td>{cliente.tipoDocumento}</td>
              <td>{cliente.documento}</td>
              <td>{cliente.nombre}</td>
              <td>{cliente.apellido}</td>
              <td>{cliente.fechaNacimiento}</td>
              <td>{cliente.direccion}</td>
              <td>{cliente.ciudad}</td>
              <td>{cliente.departamento}</td>
              <td>{cliente.pais}</td>
              <td>{cliente.marca}</td>
              
                      
            </tr>
          ))}
	
	</tbody>
	
</table>
  )
}

export default Table