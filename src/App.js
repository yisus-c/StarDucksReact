import "./App.css";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { InterfazOrdenes } from "./components/InterfazOrdenes";
import { Container } from "./components/Container";
import { InterfazGenerica } from "./components/InterfazGenerica";

function App() {
  const [clientes, setClientes] = useState([]);
  const [empleados, setEmpleados] = useState([]);
  const [items, setItems] = useState([]);
  const [ordenes, setOrdenes] = useState([]);

  const addClientes = ({ name, correo, metodosPago }) => {
    let id = clientes.length;
    setClientes([...clientes, { id, name, correo, metodosPago }]);
  };
  const addEmpleados = ({ name, salario, puesto }) => {
    let id = empleados.length;
    setEmpleados([...empleados, { id, name, salario, puesto }]);
  };
  const addItems = ({ description, price, tipo }) => {
    let id = items.length;
    setItems([...items, { id, description, price, tipo }]);
  };
  const addOrdenes = (orden) => {
    setOrdenes([...ordenes, orden]);
  };

  useEffect(() => {
    let dataClientes = localStorage.getItem("clientes");
    let dataEmpleados = localStorage.getItem("empleados");
    let dataItems = localStorage.getItem("items");
    if (dataClientes && dataEmpleados && dataItems) {
      setClientes(JSON.parse(dataClientes));
      setEmpleados(JSON.parse(dataEmpleados));
      setItems(JSON.parse(dataItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("clientes", JSON.stringify(clientes));
    localStorage.setItem("empleados", JSON.stringify(empleados));
    localStorage.setItem("items", JSON.stringify(items));
  }, [clientes, empleados, items]);

  return (
    <Router>
      <div className="App bg-dark vh-100 text-white">
        <Container>
          <NavBar />
          <Routes>
            <Route
              path="/clientes"
              element={<InterfazGenerica tInterfaz="Clientes" addMethod={addClientes} list={clientes} />}
            />
            <Route
              path="/empleados"
              element={<InterfazGenerica tInterfaz="Empleados" addMethod={addEmpleados} list={empleados}/>}
            />
            <Route
              path="/items"
              element={<InterfazGenerica tInterfaz="Items" addMethod={addItems} list={items} />}
            />
            <Route
              path="/ordenes"
              element={<InterfazOrdenes addOrdenes={addOrdenes} />}
            />
            <Route path="/" element={<Home />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
