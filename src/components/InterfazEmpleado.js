import { Creator } from "./Creator";
import { CreatorEmpleados } from "./CreatorEmpleados";
import { useState } from "react";
import { VisibilityControl } from "./VisibilityControl";
import { TableList } from "./TableList";
import { EmptyMessasge } from "./EmptyMessage";

export const InterfazEmpleado = ({ addEmpleados, list }) => {
  const [showList, setShowList] = useState(false);
  return (
    <div>
      <CreatorEmpleados addEmpleados={addEmpleados} />
      {list[0] ? (
        <VisibilityControl
          isChecked={showList}
          setShowList={(checked) => setShowList(checked)}
          tTabla="Empleados"
        />
      ) : (
        <EmptyMessasge tLista="Empleados" />
      )}
      {showList && <TableList tipoTabla="Empleados" list={list} />}
    </div>
  );
};
