export const TableRows = ({list, obtener}) => {

    return(
        <tbody>
            {list.map((objeto) => (
            <tr key={objeto.id}>
              {obtener(0, objeto).map((valor) => (
                <td key={valor}>{valor}</td>
              ))}
            </tr>
          ))}
        </tbody>
    )
}