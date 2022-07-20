import { useState } from "react";

//itemcount

const ItemCount = ({ stock =2, initial =0, onAdd }) =>{
	const [count, setCount] = useState(initial || 1);
	const updateCount = (op) =>{
		if (op === "-" && count > 0) {
			setCount(count - 1);
		}
		if (op === "+" && count < stock){
			setCount(count +1);
		}
	};
	const updateCountInput = (e) => {
		const { value } = e.target;
		if (value <= stock){
			setCount(isNaN(value) ? 0 : parseInt(value));
		}
	};
	return (
		<>
		<div className="input-group input-sppiner mb-3 d-flex justify-content-center">
			<input
				onChange={(e) => updateCountInput(e)}
				className="border-primary"
				placeholder=""
				value={count}
				type="number"
			/>
			<button
				onClick={() => updateCount("-")}
				className="btn btn-icon btn-primary"
				type="button"
			>
				-
			</button>
			<button
				onClick={() => updateCount("+")}
				className="btn btn-icon btn-primary"
				type="button"
			>
				+
			</button>
		</div>
		<div className="d-flex justify-content-center">
			<button
				onClick={() => onAdd(count)}
				type="button"
				className="btn btn-info"
				disabled={count === "" || count === 0}
			>
				Comprar!
			</button>
		</div>
		</>
	);
};

//itemlistcointainer

const ItemListContainer = ({ greeting }) => {
	const onAddItem = (count) => {
		console.log(typeof count);
		alert('${count} los articulos seran agregados al carrito.');
	};
	return <ItemCount stock ={5} initial ={1} onAdd={onAddItem}></ItemCount>;
};

//card para mostrar info de productos

const Card = ({ name, precio, img }) =>{
	return(
	<div className="card-group p-2">
	<div className="card" style={{width:"18rem"}}>
	<img class="card-img-top" src={img}/> 
	  	<div className="card-body">
		    <h5 className="card-title">{name}</h5>
		    <p className="card-text">${precio}</p>
		    <ItemListContainer />
	  	</div>
	</div>
	</div>

 	);
}




//map

const MapEjemplo = () => {
	const productos = [{
		id: 1,
		name: "Fernet",
		precio: 500,
		img:"C:\Users\Usuario\Desktop\coderhouse\REACT\Desafio Promises - Martire\app\img\fernet.jpg",
	},
	{
		id:2,
		name:"Gin",
		precio: 450,
		img:"C:\Users\Usuario\Desktop\coderhouse\REACT\Desafio Promises - Martire\app\img\gin.jpg",
	},
	{
		id:3,
		name:"Jaggermeister",
		precio:800,
		img:"C:\Users\Usuario\Desktop\coderhouse\REACT\Desafio Promises - Martire\app\img\jaggermeister.jpg",
	},
	{
		id:4,
		name:"Vodka",
		precio:650,
		img:"C:\Users\Usuario\Desktop\coderhouse\REACT\Desafio Promises - Martire\app\img\vodka.jpg",
	},
	{
		id:5,
		name:"Sex on the beach",
		precio:600,
		img:"C:\Users\Usuario\Desktop\coderhouse\REACT\Desafio Promises - Martire\app\img\sotb.jpg",
	},
	{
		id:6,
		name:"Cerveza",
		precio:250,
		img:"C:\Users\Usuario\Desktop\coderhouse\REACT\Desafio Promises - Martire\app\img\cerveza.jpg",
	},
	];

	return(
	<>
	{productos.map( (producto) => {
		return <Card key={producto.id} name ={producto.name} precio ={producto.precio}/>;
	})}
	</>
	);
};

export default MapEjemplo;