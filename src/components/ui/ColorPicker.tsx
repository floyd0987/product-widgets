import React from "react";
import { colors } from "@/constants";

interface ColorPickerProps {
  selectedColor: string | undefined;
  onSelectColor: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({
  selectedColor,
  onSelectColor,
}) => {
  return (
    <div className="flex">
      {colors.map((color) => (
        <div
          key={color.name}
          className={`color-box w-5 h-5 mx-1 cursor-pointer border-gray-300 ${
            selectedColor === color.name ? "border" : ""
          }`}
          style={{ backgroundColor: color.bgColor, color: color.textColor }}
          onClick={() => onSelectColor(color.name)}
        ></div>
      ))}
    </div>
  );
};

export default ColorPicker;
