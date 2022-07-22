import { Creator } from "./Creator";
import { EmptyMessasge } from "./EmptyMessage";
import { Menu } from "./Menu";
import { TableList } from "./TableList";
import { VisibilityControl } from "./VisibilityControl";
import { useState } from "react";

export const InterfazGenerica = ({ tInterfaz, addMethod, list }) => {
  const [showList, setShowList] = useState(false);
  return (
    <div>
      <Menu tipoMenu={tInterfaz} />
      <Creator add={addMethod} tInterfaz={tInterfaz} />
      {list[0] ? (
        <div>
        <VisibilityControl
          isChecked={showList}
          setShowList={(checked) => setShowList(checked)}
          tTabla="Clientes"
        />
        {showList && <TableList list={list} tipoTabla={tInterfaz} />}
        </div>
      ) : (
        <EmptyMessasge tLista={tInterfaz} />
      )}
    </div>
  );
};
