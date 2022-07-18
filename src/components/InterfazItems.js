import { Creator } from "./Creator";
import { CreatorItems } from "./CreatorItems";
import { useState } from "react";
import { VisibilityControl } from "./VisibilityControl";
import { TableList } from "./TableList";
import { EmptyMessasge } from "./EmptyMessage";

export const InterfazItems = ({ addItems, list }) => {
  const [showList, setShowList] = useState(false);

  return (
    <div>
      <CreatorItems addItems={addItems} />
      {list[0] ? (
        <VisibilityControl
          isChecked={showList}
          setShowList={(checked) => setShowList(checked)}
          tTabla="Items"
        />
      ) : (
        <EmptyMessasge tLista="Items" />
      )}
      {showList && <TableList tipoTabla="Items" list={list} />}
    </div>
  );
};
