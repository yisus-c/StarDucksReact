import { Creator } from "./Creator"
import { CreatorEmpleados } from "./CreatorEmpleados";

export const InterfazEmpleado = ({addEmpleados}) =>{
    return(
        <CreatorEmpleados addEmpleados={addEmpleados} />
    );
}