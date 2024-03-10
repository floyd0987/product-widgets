import React from "react";
import Tooltip from "./Tooltip";

interface Props {
  onChange: () => unknown;
  checked: boolean | undefined;
}

const Link: React.FC<Props> = ({ onChange, checked }) => {
  return (
    
      <span className="hover:bg-[#d4e0db] p-2 rounded-full relative bottom-1">
        <input type="checkbox" className="w-5 h-5 top-1 relative"  checked={checked} onChange={onChange} />
      </span>
  );
};

export default Link;
