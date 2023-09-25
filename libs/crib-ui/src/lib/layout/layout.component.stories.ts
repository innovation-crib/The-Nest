import type { Meta, StoryObj } from '@storybook/angular';
import { LayoutComponent } from './layout.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<LayoutComponent> = {
  component: LayoutComponent,
  title: 'LayoutComponent',
};

export default meta;
type Story = StoryObj<LayoutComponent>;

export const Primary: Story = {
  args: {},
  decorators: [
    (story) => ({
      ...story(),
      template: `<crib-ui-layout title="Crib UI"><li [cribUiMenuItem]><a>aaa</a></li> <div>aaaaaa</div> </crib-ui-layout>`,
    }),
  ],
};
