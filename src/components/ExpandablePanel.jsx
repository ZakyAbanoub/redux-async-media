import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

const ExpandablePanel = ({ header, children }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpandHandler = () => {
    setExpanded((val) => !val);
  };
  return (
    <div className="mb-2 border rounded">
      <div className="flex p-2 items-center justify-between">
        <div className="flex flex-row items-center justify-between">
          {header}
        </div>
        <div onClick={toggleExpandHandler} className="cursor-pointer">
          {expanded ? <GoChevronDown /> : <GoChevronLeft />}
        </div>
      </div>
      {expanded && <div className="p-2 border-t">{children}</div>}
    </div>
  );
};

export default ExpandablePanel;
