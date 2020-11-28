import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InFamilyComponent } from './in-family.component';

describe('InFamilyComponent', () => {
  let component: InFamilyComponent;
  let fixture: ComponentFixture<InFamilyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InFamilyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
