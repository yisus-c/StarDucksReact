import { Creator } from "./Creator";
import { CreatorClientes } from "./CreatorClientes";
import { useState } from "react";
import { VisibilityControl } from "./VisibilityControl";
import { TableList } from "./TableList";
import { EmptyMessasge } from "./EmptyMessage";

export const InterfazCliente = ({ addClientes, list }) => {
  const [showList, setShowList] = useState(false);

  return (
    <div>
      <CreatorClientes addClientes={addClientes} />
      {list[0] ? (
        <VisibilityControl
          isChecked={showList}
          setShowList={(checked) => setShowList(checked)}
          tTabla="Clientes"
        />
      ) : (
        <EmptyMessasge tLista="Clientes" />
      )}
      {showList && <TableList tipoTabla="Clientes" list={list} />}
    </div>
  );
};
