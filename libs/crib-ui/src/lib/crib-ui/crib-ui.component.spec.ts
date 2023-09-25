import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CribUiComponent } from './crib-ui.component';

describe('CribUiComponent', () => {
  let component: CribUiComponent;
  let fixture: ComponentFixture<CribUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CribUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CribUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
