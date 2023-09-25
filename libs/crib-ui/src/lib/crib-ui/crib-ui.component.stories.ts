import type { Meta, StoryObj } from '@storybook/angular';
import { CribUiComponent } from './crib-ui.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CribUiComponent> = {
  component: CribUiComponent,
  title: 'CribUiComponent',
};
export default meta;
type Story = StoryObj<CribUiComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/crib-ui works!/gi)).toBeTruthy();
  },
};
