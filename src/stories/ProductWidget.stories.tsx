import type { Meta, StoryObj } from "@storybook/react";

import ProductWidget from "../components/ProductWidget";

const meta: Meta<typeof ProductWidget> = {
  component: ProductWidget,
};

export default meta;
type Story = StoryObj<typeof ProductWidget>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => (

    <div className="m-8 mx-auto center" style={{maxWidth:300}}>
    <ProductWidget
      key={1}
      widgetSetting={{
        id: 1,
        type: "plastic bottles",
        amount: 100,
        action: "collects",
        active: true,
        linked: true,
        selectedColor: "green",
      }}
    />
  </div>


    
  ),
};
