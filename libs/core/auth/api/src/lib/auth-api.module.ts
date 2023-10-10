import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthApi } from './auth-api';
import { AuthDomainModule } from '@innovation-crib/core/auth/domain';
import { AuthGuardModule } from '@angular/fire/auth-guard';

@NgModule({
  imports: [CommonModule, AuthDomainModule, AuthGuardModule],
  providers: [AuthApi],
})
export class AuthApiModule {}
