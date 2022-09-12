
// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")

import { toBeDisabled } from "@testing-library/jest-dom/dist/matchers";

export default function Item(props) {

	const valorBoton = (stockActual) => {
		if (stockActual<=0 ){
			return "SIN STOCK"
		} else{
			return "COMPRAR"
		}
	}

	
	const ActualizarStock=(stock)=>{
		return stock-1;
	}

	return (
		<>
			{props.Data.map(prod => 
					

					<div className='producto'>
						<h3>{prod.producto.nombre}</h3>
						<p>{prod.producto.descripcion}</p>
						<h5>En Stock: {prod.stock>0 ? prod.stock : <span >Agotado</span>}</h5>
						<button onClick={()=>{props.incrementar();prod.stock=ActualizarStock(prod.stock);}}
						disabled={prod.stock<=0 && true}		
						> 
							{valorBoton(prod.stock)}
						</button>
					</div>

					
				)
			}
		</>
 	 )
}
//===0 ? prod.stock : "Agotado"
