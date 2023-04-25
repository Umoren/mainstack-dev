import { StoryObj, Meta } from "@storybook/react";
import TabsComponent, { TabsComponentProps } from "./TabsComponent";
import { useState } from "react";

const meta: Meta<typeof TabsComponent> = {
    tags: ['autodocs'],
    title: 'Tabs',
    component: TabsComponent,
};
export default meta;

type Story = StoryObj<TabsComponentProps>;

export const Tabs: Story = {
    args: {
        activeTab: 1,
        onTabClick: (value: number) => {
            console.log(`Tab clicked: ${value}`);
        },
    }
}

