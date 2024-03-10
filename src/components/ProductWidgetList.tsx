// components/ProductWidgetList.tsx
import React, { useEffect } from "react";
import { useProductWidgets } from "../services/productWidgetService";
import ProductWidget from "./ProductWidget";
import { useWidgetContext } from "../context/WidgetContext";

const ProductWidgetList: React.FC = () => {
  const { data: productWidgets, isLoading, error } = useProductWidgets();

  const { widgetSettings, setWidgetSettings } = useWidgetContext();
  useEffect(() => {
    setWidgetSettings(productWidgets);
  }, [productWidgets]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error?.message}</div>;

  return (
    <>
      <div className="grid grid-flow-row lg:grid-flow-col gap-20 my-8">
        {widgetSettings &&
          widgetSettings.map((widgetSetting: any) => (
            <ProductWidget
              key={widgetSetting.id}
              widgetSetting={widgetSetting}
            />
          ))}
      </div>

      {/* <pre>{JSON.stringify(widgetSettings, null, 2)}</pre> */}
    </>
  );
};

export default ProductWidgetList;

