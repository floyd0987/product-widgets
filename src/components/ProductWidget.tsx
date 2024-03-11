import React, { useContext } from "react";
import ColorPicker from "./ui/ColorPicker.tsx";
import { Switch } from "@/components/ui/switch";
import { colors } from "@/constants";
import { WidgetContext } from "../context/WidgetContext";
import Link from "./ui/Link.tsx";
import Tooltip from "./ui/Tooltip.tsx";
import Badge from "./ui/Badge.tsx";

interface Props {
  widgetSetting: ProductWidgetSettings;
}

interface ProductWidgetSettings {
  id: number;
  type: string;
  amount: number;
  action: string;
  active?: boolean;
  linked?: boolean;
  selectedColor?: string;
}

const ProductWidget: React.FC<Props> = ({ widgetSetting }) => {
  const { id, type, amount, action, active, linked, selectedColor } =
    widgetSetting;

  const { handleUpdateSettings } = useContext(WidgetContext);

  const handleProductWidgetSettings = (
    updatedSettings: Partial<ProductWidgetSettings>
  ) => {
    handleUpdateSettings(id, updatedSettings);
  };

  const color = colors.find((color) => color.name === selectedColor);

  return (
    <div>
      <Badge color={color} amount={amount} action={action} type={type} />

      <div className="settings my-6">
        <div className="flex justify-between my-3">
          <div className="text-[#3B755F] pr-6 relative">
            Link to Public Profile
            <div className="absolute bottom-3 right-0">
              <Tooltip />
            </div>
          </div>

          <div className="">
            <Link
              checked={linked}
              onChange={(e:React.ChangeEvent<HTMLInputElement>) =>
                handleProductWidgetSettings({ linked: e.target.checked })
              }
            />
          </div>
        </div>

        <div className="flex justify-between	my-3">
          <div className="text-[#3B755F]">Badge colour</div>
          <ColorPicker
            selectedColor={selectedColor}
            onSelectColor={(selectedColor) =>
              handleProductWidgetSettings({ selectedColor })
            }
          />
        </div>

        <div className="flex justify-between	 my-3">
          <div className="text-[#3B755F]">Activate badge</div>
          <div className=" ">
            <Switch
              checked={active}
              onCheckedChange={(active) =>
                handleProductWidgetSettings({ active })
              }
              className="data-[state=checked]:bg-[#3B755F] data-[state=unchecked]:bg-white border border-[#ccc] rounded-full  transition-colors duration-200 ease-in-out relative"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductWidget;
