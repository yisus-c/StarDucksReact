import './App.css';
import { useState, useEffect } from "react";
import { Creator } from './components/Creator';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { BrowserRouter as Router, Routes, Route, Switch, Link} from 'react-router-dom'
import { InterfazCliente } from './components/InterfazCliente';
import { InterfazEmpleado } from './components/InterfazEmpleado';
import { Home } from './components/Home';

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
    let dataEmpleados = localStorage.getItem("empleados");
    if(dataClientes && dataEmpleados){
      setClientes(JSON.parse(dataClientes));
      setEmpleados(JSON.parse(dataEmpleados));
    }
  }, [  ]);

  useEffect(() => {
    localStorage.setItem("clientes", JSON.stringify(clientes));
    localStorage.setItem("empleados", JSON.stringify(empleados));
  }, [clientes, empleados]);

  
  return (
    <Router>
      <div className="App bg-dark vh-100 text-white">
          <NavBar />        
          <Routes>
            <Route path="/clientes" element={<InterfazCliente addClientes={addClientes}/>} />
            <Route path="/empleados" element={<InterfazEmpleado addEmpleados={addEmpleados}/> } />
          </Routes>
        
      </div>
    </Router>
  );
}

export default App;
