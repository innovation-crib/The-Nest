import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as AuthActions from './auth.actions';

import {
  Auth,
  user,
  signInWithEmailAndPassword,
  signInAnonymously,
  setPersistence,
  signInWithPopup,
  OAuthProvider,
} from '@angular/fire/auth';
import { mapUser } from './user.model';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  private readonly actions$ = inject(Actions);

  private readonly auth = inject(Auth);
  private readonly router = inject(Router);

  onSignInSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.signInSuccess),
        map(() => {
          this.router.navigate(['/']);
        })
      ),
    { dispatch: false }
  );

  onSignOutSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.signOutSuccess),
        map(() => {
          location.reload();
        })
      ),
    { dispatch: false }
  );

  setPersistence$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.setPersistence),
        switchMap(({ persistence }) =>
          setPersistence(this.auth, { type: persistence })
        )
      ),
    { dispatch: false }
  );

  onUserChanged$ = createEffect(() =>
    user(this.auth).pipe(
      map((user) => AuthActions.userChanged({ user: mapUser(user) }))
    )
  );

  signInWithEmailAndPassword$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.signInWithEmailAndPassword),
      switchMap(({ email, password }) => {
        return signInWithEmailAndPassword(this.auth, email, password);
      }),
      map((result) =>
        // inpossible to be null
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        AuthActions.signInSuccess({ user: mapUser(result.user)! })
      ),
      catchError((error) => {
        console.error('Error', error);
        return of(AuthActions.signInFailure({ error }));
      })
    )
  );

  signOut$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.signOut),
      switchMap(() => this.auth.signOut()),
      map(() => AuthActions.signOutSuccess()),
      catchError((error) => {
        console.error('Error', error);
        return of(AuthActions.signOutFailure({ error }));
      })
    )
  );

  signInAnonymously$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.signInAnonymously),
      switchMap(() => signInAnonymously(this.auth)),
      map((result) =>
        // inpossible to be null
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        AuthActions.signInSuccess({ user: mapUser(result.user)! })
      ),
      catchError((error) => {
        console.error('Error', error);
        return of(AuthActions.signInFailure({ error }));
      })
    )
  );

  signInWithAzureAd$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.signInWithAzureAd),
      switchMap(() => {
        const provider = new OAuthProvider('azuread');
        return signInWithPopup(this.auth, provider);
      }),
      map((result) =>
        // inpossible to be null
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        AuthActions.signInSuccess({ user: mapUser(result.user)! })
      ),
      catchError((error) => {
        console.error('Error', error);
        return of(AuthActions.signInFailure({ error }));
      })
    )
  );
}
