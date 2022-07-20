import {useState} from "react";

const ClickTracker = () =>{
	const [count, setCount] = useState(0);
	const registrarClick = (operacion)=>{
		if(operacion === "-" && count>0){
			setCount(count-1);
		}else if(operacion === "+" && count <4) {
			setCount(count+1);
		}
	};
	return (
		<>
		<div className = "botonera">
			<button onClick={() => registrarClick("-")}>Anterior</button>
			<p>{"Pagina " + count}</p>
			<button onClick={() => registrarClick("+")}>Siguiente</button>
		</div>	
		</>
		);
}

export default ClickTracker;