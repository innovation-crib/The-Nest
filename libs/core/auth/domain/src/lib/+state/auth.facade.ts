import { Injectable, inject } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import { toSignal } from '@angular/core/rxjs-interop';

import * as AuthActions from './auth.actions';

import { authFeature } from './feature';

@Injectable()
export class AuthFacade {
  private readonly store = inject(Store);

  // /**
  //  * Combine pieces of state using createSelector,
  //  * and expose them as observables through the facade.
  //  */
  // loaded$ = this.store.pipe(select(AuthSelectors.selectAuthLoaded));
  // allAuth$ = this.store.pipe(select(AuthSelectors.selectAllAuth));
  // selectedAuth$ = this.store.pipe(select(AuthSelectors.selectEntity));

  // /**
  //  * Use the initialization action to perform one
  //  * or more tasks in your Effects.
  //  */
  // init() {
  //   this.store.dispatch(AuthActions.initAuth());
  // }

  signInWithEmailAndPassword(email: string, password: string) {
    this.store.dispatch(
      AuthActions.signInWithEmailAndPassword({
        email,
        password,
      })
    );
  }

  signInAnonymously() {
    this.store.dispatch(AuthActions.signInAnonymously());
  }

  signOut() {
    this.store.dispatch(AuthActions.signOut());
  }

  setPersistence(persistence: 'LOCAL' | 'SESSION' | 'NONE') {
    this.store.dispatch(AuthActions.setPersistence({ persistence }));
  }

  signInWithAzureAd() {
    this.store.dispatch(AuthActions.signInWithAzureAd());
  }

  isSignedIn = toSignal(this.store.pipe(select(authFeature.selectSignedIn)), {
    requireSync: true,
  });

  user = toSignal(this.store.pipe(select(authFeature.selectUser)), {
    requireSync: true,
  });

  error = toSignal(this.store.pipe(select(authFeature.selectError)), {
    requireSync: true,
  });

  working = toSignal(this.store.pipe(select(authFeature.selectWorking)), {
    requireSync: true,
  });
}
