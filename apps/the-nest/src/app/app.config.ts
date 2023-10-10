import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app.routes';

import fbConfig from './firebase.config';
import { provideStore, provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { authFeature, AuthEffects } from '@innovation-crib/core/auth/domain';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideEffects(AuthEffects),
    provideStore(),
    provideState(authFeature),
    provideStoreDevtools({ maxAge: 25, logOnly: false }),
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    provideAnimations(),
    fbConfig,
  ],
};
