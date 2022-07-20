import logo from './logo.svg';
import './App.css';
import Promises from "./components/Promises";
import Title from "./components/Title";
import NavBar from "./components/NavBar";


function App() {
  return (
   <>
    <NavBar name={"menu"} />
    <Title />  
    <Promises />
   </>
  );
}

export default App;
