import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebMarketingComponent } from './web-marketing.component';

describe('WebMarketingComponent', () => {
  let component: WebMarketingComponent;
  let fixture: ComponentFixture<WebMarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebMarketingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
