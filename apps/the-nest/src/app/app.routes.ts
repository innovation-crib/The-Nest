import { Route } from '@angular/router';

import {
  canActivate,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';

const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['signin']);

export const appRoutes: Route[] = [
  {
    path: 'signin',
    pathMatch: 'full',
    loadComponent: () =>
      import('@innovation-crib/core/auth/ui').then((m) => m.SignInComponent),
    ...canActivate(redirectLoggedInToHome),
  },
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
    ...canActivate(redirectUnauthorizedToLogin),
    children: [
      // {
      //   path: '',
      //   pathMatch: 'full',
      //   redirectTo: 'home',
      // },
      // {
      //   path: 'home',
      //   loadComponent: () =>
      //     import('./home/home.component').then((m) => m.HomeComponent),
      // },
    ],
  },
  {
    //catch all route
    path: '**',
    redirectTo: '/',
  },
];
