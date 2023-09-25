import { Component, Directive, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppbarComponent } from './appbar/appbar.component';

@Component({
  selector: 'crib-ui-layout',
  standalone: true,
  imports: [CommonModule, AppbarComponent],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  @Input() title = '';
  year = new Date().getFullYear();
}

@Directive({
  selector: '[cribUiMenuItem]',
  standalone: true,
})
export class MenuItemDirective {}
