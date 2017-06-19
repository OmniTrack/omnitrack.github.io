import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcknowledgementComponent } from './acknowledgement.component';

describe('AcknowledgementComponent', () => {
  let component: AcknowledgementComponent;
  let fixture: ComponentFixture<AcknowledgementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcknowledgementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcknowledgementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
