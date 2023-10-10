import { UserInfo, UserMetadata } from '@angular/fire/auth';

import { User as fbUser } from '@angular/fire/auth';

export interface User extends UserInfo {
  readonly emailVerified: boolean;
  /**
   * Whether the user is authenticated using the {@link ProviderId}.ANONYMOUS provider.
   */
  readonly isAnonymous: boolean;
  /**
   * Additional metadata around user creation and sign-in times.
   */
  readonly metadata: UserMetadata;
  /**
   * Additional per provider such as displayName and profile information.
   */
  readonly providerData: UserInfo[];
}

export const mapUser = (user: fbUser | null): User | null =>
  user
    ? {
        displayName: user.displayName,
        email: user.email,
        emailVerified: user.emailVerified,
        isAnonymous: user.isAnonymous,
        metadata: user.metadata,
        phoneNumber: user.phoneNumber,
        photoURL: user.photoURL,
        providerData: user.providerData,
        providerId: user.providerId,
        uid: user.uid,
      }
    : null;
