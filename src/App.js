import logo from './logo.svg';
import './App.css';
import { useState } from "react"

function App() {
  const [clientes, setClientes] = useState([]);
  const[empleados, setEmpleados] = useState([]);
  const [items, setItems] = useState([]);
  const [ordenes, setOrdenes] = useState([]);
  
  const addClientes = (cliente) => {
    setClientes([...clientes, cliente])
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Cafeteria</h1>
      </header>

    </div>
  );
}

export default App;
