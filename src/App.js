import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import { Creator } from './components/Creator';


function App() {
  const [clientes, setClientes] = useState([]);
  const[empleados, setEmpleados] = useState([]);
  const [items, setItems] = useState([]);
  const [ordenes, setOrdenes] = useState([]);
  
  const addClientes = (cliente) => {
    setClientes([...clientes, cliente])
  }
  const addEmpleados = (empleado) => {
    setEmpleados([...empleados, empleado])
  }
  const addItems = (item) => {
    setItems([...items, item])
  }
  const addOrdenes = (orden) => {
    setOrdenes([...ordenes, orden])
  }

  useEffect(()=>{
    let dataClientes = localStorage.getItem("clientes");
    if(dataClientes){
      setClientes(JSON.parse(dataClientes));
    }
  }, [  ]);

  useEffect(() => {
    localStorage.setItem("clientes", JSON.stringify(clientes))
  }, [clientes])

  return (
    <div className="App">
      
      <Creator tInterfaz={"Clientes"} addClientes={addClientes} />
    </div>
  );
}

export default App;
