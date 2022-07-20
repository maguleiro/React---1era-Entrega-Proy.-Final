import React, { Component } from "react";

class Title extends Component {
	constructor(props){
		super(props);
	}
	state = { 
		title:  "Bienvenido de nuevo!",
		subTitle:  "Nuevos ingresos"
	};

	render(){
		return (
		<>	
			<h1 className = "titulo">{this.state.title}</h1>
			<h2 className = "subTitulo">{this.state.subTitle}</h2>
		</>
			);
	}
}

export default Title;