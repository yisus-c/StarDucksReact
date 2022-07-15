import { useState, useEffect } from "react";
import { Creator } from "./Creator";

export const InterfazCliente = ({addClientes}) => {
    
    return (
        <Creator tInterfaz="Clientes" addClientes={addClientes}></Creator>
    )
}