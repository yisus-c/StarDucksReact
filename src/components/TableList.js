import { TableHeader } from "./TableHeader";
import { TableRows } from "./TableRows";
import { useEffect, useState } from "react";

export const TableList = ({ tipoTabla, list }) => {
  const obtener = (tipo, objeto) => {
    let propiedades = [];
    let valores = [];
    for (let key in objeto) {
      if (objeto.hasOwnProperty(key)) {
        let element = objeto[key];
        if (key != "metodosPago") {
          propiedades.push(key);
          valores.push(element);
        }
      }
    }
    if (tipo === 1) {
      return propiedades;
    }
    return valores;
  };
  const [valorBusqueda, setValorBusqueda] = useState("");
  const [newList, setNewList] = useState([]);
  //const [segundaPropiedad, setSegundaPropiedad] = useState('')
  //const [propiedades, setPropiedades] = useState([])
  let propiedades = obtener(1, list[0]);
  let segundaPropiedad = propiedades[1];

  useEffect(() => {
    setNewList(
      list.filter(
        (objeto) =>
          objeto[segundaPropiedad].includes(valorBusqueda) ||
          objeto.id == valorBusqueda
      )
    );
  }, [valorBusqueda, list, segundaPropiedad]);

  return (
    <div>
      <table className="table">
        <thead>
          <TableHeader
            tTabla={tipoTabla}
            valorBusqueda={(valor) => setValorBusqueda(valor)}
          />
        </thead>
      </table>

      <table className="table table-dark table-striped table-bordered border-secondary">
        <thead>
          <tr>
            {obtener(1, list[0]).map((propiedad) => (
              <th key={propiedad}>{propiedad}</th>
            ))}
          </tr>
        </thead>
        <TableRows list={newList} obtener={obtener} />
      </table>
    </div>
  );
};
