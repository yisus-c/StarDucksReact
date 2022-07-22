import { CreatorClientes } from "./CreatorClientes";
import { CreatorEmpleados } from "./CreatorEmpleados";
import { CreatorItems } from "./CreatorItems";

export const Creator = ({ tInterfaz, add }) => {
  if (tInterfaz === "Clientes") {
    return <CreatorClientes addClientes={add} />;
  }

  if (tInterfaz === "Empleados") {
    return <CreatorEmpleados addEmpleados={add} />;
  }

  if (tInterfaz === "Items") {
    return <CreatorItems addItems={add} />;
  }
};
