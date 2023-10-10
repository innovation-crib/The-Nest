import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFacade } from './+state/auth.facade';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [AuthFacade],
})
export class AuthDomainModule {}
