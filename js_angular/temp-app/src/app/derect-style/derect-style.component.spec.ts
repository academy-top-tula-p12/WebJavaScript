import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DerectStyleComponent } from './derect-style.component';

describe('DerectStyleComponent', () => {
  let component: DerectStyleComponent;
  let fixture: ComponentFixture<DerectStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DerectStyleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DerectStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
