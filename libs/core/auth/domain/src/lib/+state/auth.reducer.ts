import { createReducer, on } from '@ngrx/store';

import * as AuthActions from './auth.actions';
import { User } from './user.model';

export const AUTH_FEATURE_KEY = 'auth';

export interface AuthState {
  signedIn: boolean;
  loaded: boolean;
  error: unknown | null; // last none error (if any)
  user: User | null;
  working: boolean;
  persistence: 'LOCAL' | 'SESSION' | 'NONE';
}

export const initialAuthState: AuthState = {
  signedIn: false,
  loaded: false,
  error: null,
  user: null,
  working: false,
  persistence: 'LOCAL',
};

export const reducer = createReducer(
  initialAuthState,
  on(AuthActions.userChanged, (state, { user }) => ({
    ...state,
    user,
    signedIn: !!user,
  })),
  on(AuthActions.signInWithEmailAndPassword, (state) => ({
    ...state,
    working: true,
  })),
  on(AuthActions.signInSuccess, (state, { user }) => ({
    ...state,
    user,
    signedIn: true,
    working: false,
  })),
  on(AuthActions.signInFailure, (state, { error }) => ({
    ...state,
    error,
    working: false,
  })),
  on(AuthActions.signOut, (state) => ({
    ...state,
    working: true,
  })),
  on(AuthActions.signOutSuccess, (state) => ({
    ...state,
    user: null,
    signedIn: false,
    working: false,
  })),
  on(AuthActions.signOutFailure, (state, { error }) => ({
    ...state,
    error,
    working: false,
  })),
  on(AuthActions.setPersistence, (state, { persistence }) => ({
    ...state,
    persistence,
  }))
);
