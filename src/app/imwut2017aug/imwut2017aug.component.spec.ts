import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Imwut2017augComponent } from './imwut2017aug.component';

describe('Imwut2017augComponent', () => {
  let component: Imwut2017augComponent;
  let fixture: ComponentFixture<Imwut2017augComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Imwut2017augComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Imwut2017augComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
