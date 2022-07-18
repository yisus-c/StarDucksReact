export const TableList = ({ tipoTabla, list }) => {
  const obtener = (tipo, objeto) => {
    let propiedades = [];
    let valores = [];
    for (let key in objeto) {
      if (objeto.hasOwnProperty(key)) {
        let element = objeto[key];
        if(key!='metodosPago'){
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
  return (
    <div>
      <table className="table">
        <thead>
          <tr className="table-primary">
            <th>{tipoTabla}</th>
          </tr>
        </thead>
      </table>

      <table className="table table-dark table-striped table-bordered border-secondary">
        <thead>
          <tr>
            {obtener(1, list[0]).map(
              (propiedad) => (
                <th key={propiedad}>{propiedad}</th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {list.map((objeto) => (
            <tr key={objeto.id}>
              {obtener(0, objeto).map((valor) => (
                <td key={valor}>{valor}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
