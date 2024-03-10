import type { Meta, StoryObj } from "@storybook/react";

import Badge from "../components/ui/Badge";

const meta: Meta<typeof Badge> = {
  component: Badge,
};

export default meta;
type Story = StoryObj<typeof Badge>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => (
    <div className="m-8 mx-auto center" style={{ maxWidth: 300 }}>
      <Badge
        color={"green"}
        amount={200}
        action={"collects"}
        type={"plastic bottles"}
      />
    </div>
  ),
};
