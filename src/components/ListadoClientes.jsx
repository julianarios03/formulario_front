import React from "react";

import axios from 'axios'
import React, { useEffect, useState } from 'react'

const apiClientes ="http://localhost:3500/clientes";
const Formulario =()=> {
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
        <table className="table mt-4">
        <thead className="thead">
          <tr>
            <th scope="col">#</th>
            <th scope="col">TipoIdentificacion
            </th>
            <th scope="col">NumIdentificacion</th>
            <th scope="col">Nombres</th>
            <th scope="col">Apellidos</th>
            <th
              scope="col">FechaDeNacimiento</th>
              <th scope="col">Dirrecion</th>
            <th scope="col">Ciudad</th>
            <th scope="col">Departamentos</th>
            <th scope="col">Pais</th>
            <th scope="col">Marca</th>
            <th scope="col">Acciones</th>
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
              <td>
                <a href="">Editar</a>
              </td>
                      
            </tr>
          ))}
        </tbody>
      </table>

            
       
    )

}
export {
  Formulario
  
}
