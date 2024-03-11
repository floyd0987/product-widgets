import React, { useState } from 'react';

interface ProductWidgetSettingsProps {
  widget: {
    id: number;
    type: "carbon" | "plastic bottles" | "trees";
    amount: number;
    action: "collects" | "plants" | "offsets";
    active: boolean;
    linked: boolean;
    selectedColor: "white" | "black" | "blue" | "green" | "beige";
  };
  onUpdateSettings: (updatedSettings: Partial<ProductWidgetSettings>) => void;
}

interface ProductWidgetSettings {
  color?: string;
  isActive?: boolean;
  isLinked?: boolean;
}

const ProductWidgetSettings: React.FC<ProductWidgetSettingsProps> = ({ widget, onUpdateSettings }) => {
  const [color, setColor] = useState(widget.selectedColor);
  const [isActive, setIsActive] = useState(widget.active);
  const [isLinked, setIsLinked] = useState(widget.linked);

  const handleSaveSettings = () => {
    onUpdateSettings({
      color,
      isActive,
      isLinked
    });
  };

  return (
    <div>
      <label>Color:</label>
      <select value={color} onChange={(e) => setColor(e.target.value)}>
        <option value="white">White</option>
        <option value="black">Black</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="beige">Beige</option>
      </select>
      <label>
        <input
          type="checkbox"
          checked={isActive}
          onChange={(e) => setIsActive(e.target.checked)}
        />
        Active
      </label>
      <label>
        <input
          type="checkbox"
          checked={isLinked}
          onChange={(e) => setIsLinked(e.target.checked)}
        />
        Linked
      </label>
      <button onClick={handleSaveSettings}>Save</button>
    </div>
  );
};

export default ProductWidgetSettings;
