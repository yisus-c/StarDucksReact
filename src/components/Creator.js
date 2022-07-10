import { useState } from "react";

export const Creator = ({ tInterfaz, addClientes }) => {
  const [newClientName, setNewClientName] = useState();
  const [newClientCorreo, setNewClientCorreo] = useState();
  
  if (tInterfaz === "Clientes") {
    const handleSubmit = (e) => {
        const metodosPago = {
            efectivo: 0,
            puntos: {},
            tarjeta: {}
        }
        e.preventDefault();
        addClientes({name: newClientName, correo: newClientCorreo, metodosPago})
        setNewClientName("")
    };
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={newClientName}
          onChange={(e) => setNewClientName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Correo"
          value={newClientCorreo}
          onChange={(a) => setNewClientCorreo(a.target.value)}
        />
        <button>Guardar</button>
      </form>
    );
  }
  if (tInterfaz === "Empleados") {
  }
  if (tInterfaz === "Items") {
  }
  if (tInterfaz === "Ordenes") {
  }
};
