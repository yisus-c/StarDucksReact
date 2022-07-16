import { useState } from "react";

export const CreatorClientes = ({addClientes}) => {
    const [newClientName, setNewClientName] = useState('');
    const [newClientCorreo, setNewClientCorreo] = useState('');
  
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
      
      <form onSubmit={handleSubmit} className="row " >
       
          <div className="col-sm mt-2">
            <input
              className="form-control "
              type="text"
              placeholder="Nombre"
              value={newClientName}
              onChange={(e) => setNewClientName(e.target.value)}
            />
          </div>
          <div className="col-sm mt-2">
            <input
              type="text"
              className="form-control"
              placeholder="Correo"
              value={newClientCorreo}
              onChange={(e) => setNewClientCorreo(e.target.value)}
            />
          </div>
          <div className="col-2 mt-2">
            <button className="btn btn-primary">Guardar</button>
          </div>
        
      </form>
      
    );
}