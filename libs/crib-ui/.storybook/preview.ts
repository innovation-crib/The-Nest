// add grobal modules to storybook preview
import type { Preview } from '@storybook/angular';

import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const preview: Preview = {
  decorators: [
    moduleMetadata({
      imports: [BrowserAnimationsModule],
    }),
    componentWrapperDecorator(
      (story) => `<div class="mat-typography">${story}</div>`
    ),
  ],
};

export default preview;
