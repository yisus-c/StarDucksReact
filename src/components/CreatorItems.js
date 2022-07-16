import { useState } from "react";

export const CreatorItems = ({ addItems }) => {
  const [newItemDescription, setNewItemDescription] = useState("");
  const [newItemPrecio, setNewItemPrecio] = useState(0);

  const handleSubmit = (e) => {
    let tipo = document.getElementById("tiposItems").value;
    e.preventDefault();
    addItems({ description: newItemDescription, price: newItemPrecio, tipo });
    setNewItemDescription("");
    setNewItemPrecio(0);
  };

  return (
    <form onSubmit={handleSubmit} className="row">
      <div className="col-sm mt-2">
        <input
          type="text"
          placeholder="Descripcion"
          value={newItemDescription}
          onChange={(e) => setNewItemDescription(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="col-sm mt-2 input-group">
        <span className="input-group-text" id="basic-addon1">
            ${" "}
        </span>
        <input
          type="number"
          placeholder="$0.0"
          step="any"
          value={newItemPrecio}
          onChange={(e) => setNewItemPrecio(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="col-sm mt-2 ">
        <select id="tiposItems" className="form-select">
          <option value="Objeto">Objeto</option>
          <option value="Alimento">Alimento</option>
          <option calue="Cafe">Cafe</option>
        </select>
      </div>
      <div className="col-2 mt-2">
        <button className="btn btn-primary">Guardar</button>
      </div>
    </form>
  );
};
