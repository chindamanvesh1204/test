import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecylehooksComponent } from './lifecylehooks.component';

describe('LifecylehooksComponent', () => {
  let component: LifecylehooksComponent;
  let fixture: ComponentFixture<LifecylehooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifecylehooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifecylehooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
