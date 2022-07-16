import { Creator } from "./Creator";
import { CreatorClientes } from "./CreatorClientes";

export const InterfazCliente = ({addClientes}) => {
    
    return (
        <CreatorClientes addClientes={addClientes} />
    )
}