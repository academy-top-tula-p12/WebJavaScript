import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DerectClassComponent } from './derect-class.component';

describe('DerectClassComponent', () => {
  let component: DerectClassComponent;
  let fixture: ComponentFixture<DerectClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DerectClassComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DerectClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
