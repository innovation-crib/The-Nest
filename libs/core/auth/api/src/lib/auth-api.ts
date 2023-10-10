import { Injectable, computed } from '@angular/core';
import { AuthFacade } from '@innovation-crib/core/auth/domain';
import { Md5 } from 'ts-md5';
@Injectable()
export class AuthApi {
  constructor(private facade: AuthFacade) {}

  signInWithEmailAndPassword(email: string, password: string) {
    this.facade.signInWithEmailAndPassword(email, password);
  }

  signOut() {
    this.facade.signOut();
  }

  signInAnonymously() {
    this.facade.signInAnonymously();
  }

  setPersistence(persistence: 'LOCAL' | 'SESSION' | 'NONE') {
    this.facade.setPersistence(persistence);
  }

  isSignedIn = this.facade.isSignedIn;

  user = this.facade.user;

  error = this.facade.error;

  working = this.facade.working;

  displayName = computed(() => {
    const user = this.facade.user();
    return user?.displayName;
  });

  profilePicture = computed(() => {
    const user = this.facade.user();

    if (!user) {
      return null;
    }

    const email = user?.email;

    const hash = Md5.hashStr(email!);

    return (
      user?.photoURL ?? `https://www.gravatar.com/avatar/${hash}?d=identicon`
    );
  });
}
