import { StoryObj, Meta } from '@storybook/react';
import CardComponent, { CardComponentProps } from './CardComponent';


const meta: Meta<typeof CardComponent> = {
  tags: ['autodocs'],
  title: 'Card',
  component: CardComponent,
};
export default meta;

type Story = StoryObj<typeof CardComponent>;


export const Card: Story = {
  args: {
    title: 'Example Card Title',
    sources: [
      {
        label: 'Source 1',
        count: 10,
        value: 30,
        icon: 'https://via.placeholder.com/16',
      },
      {
        label: 'Source 2',
        count: 20,
        value: 40,
        icon: 'https://via.placeholder.com/15',
      },
      {
        label: 'Source 3',
        count: 30,
        value: 20,
        icon: 'https://via.placeholder.com/18',
      },
    ]
  },
};