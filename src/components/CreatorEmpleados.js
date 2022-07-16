import { useState } from "react";

export const CreatorEmpleados = ({ addEmpleados }) => {
  const [newEmpleadoName, setNewEmpleadoName] = useState("");
  const [newEmpleadoSalario, setNewEmpleadoSalario] = useState(0);

  const handleSubmitEmpleado = (e) => {
    let puesto = document.getElementById("puestos").value;
    e.preventDefault();
    addEmpleados({
      name: newEmpleadoName,
      salario: newEmpleadoSalario,
      puesto,
    });
    setNewEmpleadoName("");
    setNewEmpleadoSalario(0);
  };
  return (
    <form onSubmit={handleSubmitEmpleado} className="row">
      <div className="col-sm mt-2">
        <input
          className="form-control"
          type="text"
          placeholder="Nombre"
          value={newEmpleadoName}
          onChange={(e) => setNewEmpleadoName(e.target.value)}
        />
      </div>
      <div className="col-sm input-group mt-2">
        <span className="input-group-text" id="basic-addon1">
          ${" "}
        </span>
        <input
          className="form-control"
          type="number"
          placeholder="Salario"
          value={newEmpleadoSalario}
          onChange={(e) => setNewEmpleadoSalario(e.target.valueAsNumber)}
          step="any"
        />
      </div>
      <div className="col-sm input-group mt-2">
        <select id="puestos" className=" form-select form-select-sm">
          <option value="Cajero">Cajero</option>
          <option value="Barista">Barista</option>
        </select>
      </div>
      <div className="col-2  mt-2">
        <button className="btn btn-primary">Guardar</button>
      </div>
    </form>
  );
};
