import type { Meta, StoryObj } from '@storybook/angular';
import { LayoutComponent } from './layout.component';

const meta: Meta<LayoutComponent> = {
  component: LayoutComponent,
  title: 'LayoutComponent',
  tags: ['autodocs'],
  subcomponents: {},
};

export default meta;
type Story = StoryObj<LayoutComponent>;

export const Primary: Story = {
  args: {
    title: 'Crib UI',
  },
  decorators: [
    (story) => ({
      ...story(),
      template: `<crib-ui-layout [title]="title"> </crib-ui-layout>`,
    }),
  ],
};
