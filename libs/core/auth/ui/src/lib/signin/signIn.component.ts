import { Component, computed, effect } from '@angular/core';

import { CommonModule } from '@angular/common';

// auth domain module
import { AuthDomainModule } from '@innovation-crib/core/auth/domain';

// forms
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AuthFacade } from '@innovation-crib/core/auth/domain';
import { Router } from '@angular/router';

@Component({
  selector: 'innovation-crib-signin',
  templateUrl: './signIn.component.html',
  styleUrls: ['./signIn.component.scss'],
  standalone: true,
  imports: [CommonModule, AuthDomainModule, ReactiveFormsModule, FormsModule],
})
export class SignInComponent {
  constructor(private authFacade: AuthFacade, private readonly router: Router) {
    effect(() => {
      if (this.authFacade.working()) {
        this.form.disable();
        return;
      }
      this.form.enable();
    });
  }

  signInWithAzureAD() {
    console.log('signInWithAzureAD');
    this.authFacade.signInWithAzureAd();
  }

  form = new FormGroup({
    email: new FormControl({ value: '', disabled: false }, [
      Validators.email,
      Validators.required,
    ]),
    password: new FormControl({ value: '', disabled: false }, [
      Validators.required,
    ]),
    rememberMe: new FormControl({ value: false, disabled: false }),
  });

  working = this.authFacade.working;

  errorMessage = computed(() => {
    const msg = (this.authFacade.error() as any)?.code;
    if (!msg) {
      return null;
    }
    // map error code to message
    switch (msg) {
      case 'auth/user-not-found':
        return 'User not found';
      case 'auth/wrong-password':
        return 'Wrong password';
      case 'auth/too-many-requests':
        return 'Too many requests';
      default:
        return msg;
    }
  });

  onSubmit() {
    // set persistence
    this.authFacade.setPersistence(
      this.form.value.rememberMe ? 'LOCAL' : 'SESSION'
    );

    // sign in with email and password
    this.authFacade.signInWithEmailAndPassword(
      this.form.value.email ?? '',
      this.form.value.password ?? ''
    );
  }
}
