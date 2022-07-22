export const TableHeader = ({tTabla, valorBusqueda}) => {
    return(
        <tr className="table-primary">
            <th className="d-flex justify-content-between p-2 ">
                {tTabla}
                <form>
                    <input
                        className="form-control"
                        type="search"
                        placeholder="ID, palabra clave..."
                        onChange={(e) => valorBusqueda(e.target.value)}
                    />
                </form>
            </th>
        </tr>
    )
}