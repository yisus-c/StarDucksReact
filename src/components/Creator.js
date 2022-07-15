import { useState } from "react";

export const Creator = ({ tInterfaz, addClientes, addEmpleados }) => {
  const [newClientName, setNewClientName] = useState('');
  const [newClientCorreo, setNewClientCorreo] = useState('');
  const [newEmpleadoName, setNewEmpleadoName] = useState('');
  const [newEmpleadoSalario, setNewEmpleadoSalario] = useState(0);



  if (tInterfaz === "Clientes") {
    const handleSubmit = (e) => {
        const metodosPago = {
            efectivo: 0,
            puntos: {},
            tarjeta: {}
        };
        e.preventDefault();
        addClientes({name: newClientName, correo: newClientCorreo, metodosPago});
        setNewClientName('');
        setNewClientCorreo('')
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
          onChange={(e) => setNewClientCorreo(e.target.value)}
        />
        <button>Guardar</button>
      </form>
    );
  }
  if (tInterfaz === "Empleados") {
    const handleSubmitEmpleado = (e) => {
      e.preventDefault();
      addEmpleados({name: newEmpleadoName, salario: newEmpleadoSalario});
      setNewEmpleadoName('');
      setNewEmpleadoSalario(0);
    }
    return(
      <form onSubmit={handleSubmitEmpleado}>
        <input
          type="text"
          placeholder="Nombre"
          value={newEmpleadoName}
          onChange={(e) => setNewEmpleadoName(e.target.value)}
        />
        <input 
          type="number"
          placeholder="Salario"
          value={newEmpleadoSalario}
          onChange={(e) => setNewEmpleadoSalario(e.target.valueAsNumber)}
          step="any"
        />
        <label>Puesto: </label>
        <select > 
          <option value="Cajero">Cajero</option>
          <option value="Barista">Barista</option>
        </select>
        <button>Guardar</button>
      </form>
    );
  }
  if (tInterfaz === "Items") {
    const handleSubmit = (e) => {
      
    }
    return(
      <form>
        <label>Hola mundo</label>
      </form>
    )
  }
};
