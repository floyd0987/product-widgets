import React from "react";

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean | undefined;
}

const Link: React.FC<Props> = ({ onChange, checked }) => {
  return (
    
      <span className="hover:bg-[#d4e0db] p-2 rounded-full relative bottom-1">
        <input type="checkbox" className="w-5 h-5 top-1 relative accent-[#3B755F]"  checked={checked} onChange={onChange} />
      </span>
  );
};

export default Link;
