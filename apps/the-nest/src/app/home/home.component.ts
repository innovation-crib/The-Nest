import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { AuthApi, AuthApiModule } from '@innovation-crib/core/auth/api';

import { CdkMenuModule } from '@angular/cdk/menu';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'innovation-crib-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [CommonModule, AuthApiModule, CdkMenuModule, RouterModule],
})
export class HomeComponent {
  constructor(private authApi: AuthApi) {}

  signOut() {
    this.authApi.signOut();
    // navigate to sign in page
  }

  displayName = this.authApi.displayName;
  profilePicture = this.authApi.profilePicture;
}
