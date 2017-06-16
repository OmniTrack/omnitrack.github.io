import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBannerComponentComponent } from './main-banner-component.component';

describe('MainBannerComponentComponent', () => {
  let component: MainBannerComponentComponent;
  let fixture: ComponentFixture<MainBannerComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainBannerComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBannerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
