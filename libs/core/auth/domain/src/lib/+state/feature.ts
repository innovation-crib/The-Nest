import { createFeature } from '@ngrx/store';
import { reducer } from './auth.reducer';

export const authFeature = createFeature({
  name: 'auth',
  reducer: reducer,
  extraSelectors: (base) => ({}),
});
