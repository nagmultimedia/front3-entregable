import React, {useState} from 'react'

// El componente Cabera no tiene componentes hijos.
// ESTADO: Cabecera no tiene estado.
// MÉTODOS: Cabecera no tiene métodos.
// PROPS: Cabecera recibe de su padre la cantidad que va a mostrar dentro del span correpondiente
// Maqueta de Cabecera:
//    h1
//    p > span     (el span mostrará la cantidad recibida por props)

export default function Cabecera(props) {


  let cantProds= 0;

	const titulo = <h1>Carrito de compras</h1>
	let subTexto = <p>Cantidad de productos: <span>{props.cantCarrito}</span></p>

  return (
    <header>
        {titulo}
		{subTexto}
    </header>
  )
}
