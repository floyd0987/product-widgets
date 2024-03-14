import React from "react";
import { colors } from "@/constants";

interface ColorPickerProps {
  selectedColor: string | undefined;
  onSelectColor: (color: string) => void;
  active: boolean | undefined
}

const ColorPicker: React.FC<ColorPickerProps> = ({
  selectedColor,
  onSelectColor,
  active
}) => {




  return (
    <div className="flex">
      {colors.map((color) => (
        <div
          key={color.name}
          className={  `${active ? 'color-box cursor-pointer' : ''} w-5 h-5 mx-1  border-gray-300 ${
            selectedColor === color.name ? "border" : ""
          }`}
          style={{ backgroundColor: color.bgColor, color: color.textColor }}
          onClick={() => active && onSelectColor(color.name)}
        ></div>
      ))}
    </div>
  );
};

export default ColorPicker;
