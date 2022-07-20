const EstiloTexto = ({ text }) =>{
	return <a href="index.html" className="nav__item">{ text }</a>
};



const NavBar = ({ name }) => {
	const navItems = ["Productos","Contacto","Nosotros","Mas"];
	const toUpperNavElements = (text) =>{
		return text.toUpperCase();
	};
	const navItemsStyled = navItems.map(item => (toUpperNavElements(item)) )
	console.log(navItemsStyled);
	const displayName = name.toUpperCase();
	return (
		<>
		<nav className="nav">
			<div class="nav__menu">
				<a href="index.html" class="nav__logo">{displayName}</a>
				{navItemsStyled.map( (item) => {
					return <EstiloTexto text={item} />
				})}

				{/*<EstiloTexto text={navItemsStyled[0]}/>
				<EstiloTexto text={navItemsStyled[1]}/>
				<EstiloTexto text={navItemsStyled[2]}/>
				<EstiloTexto text={navItemsStyled[3]}/>*/}
			</div>
		</nav>
		</>
 );
};

export default NavBar;