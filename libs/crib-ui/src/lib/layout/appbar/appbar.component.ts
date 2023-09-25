import {
  Component,
  Directive,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'crib-ui-appbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.scss'],
})
export class AppbarComponent {
  @Input() title = '';
  @Output() menuClick = new EventEmitter<void>();
}
