import { createAction, props } from '@ngrx/store';
import { User } from './user.model';

const prefix = '[Auth]';

export const userChanged = createAction(
  `${prefix} User Changed`,
  props<{ user: User | null }>()
);

export const signInWithEmailAndPassword = createAction(
  `${prefix} Sign In With Email And Password`,
  props<{ email: string; password: string }>()
);

export const signInAnonymously = createAction(`${prefix} Sign In Anonymously`);

export const signInSuccess = createAction(
  `${prefix} Sign In Success`,
  props<{ user: User }>()
);

export const signInFailure = createAction(
  `${prefix} Sign In Failure`,
  props<{ error: any }>()
);

export const signOut = createAction(`${prefix} Sign Out`);

export const signOutSuccess = createAction(`${prefix} Sign Out Success`);

export const signOutFailure = createAction(
  `${prefix} Sign Out Failure`,
  props<{ error: any }>()
);

export const setPersistence = createAction(
  `${prefix} Set Persistence`,
  props<{ persistence: 'LOCAL' | 'SESSION' | 'NONE' }>()
);

export const signInWithAzureAd = createAction(
  `${prefix} Sign In With Azure Ad`
);
