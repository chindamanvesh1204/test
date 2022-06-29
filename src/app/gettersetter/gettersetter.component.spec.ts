import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GettersetterComponent } from './gettersetter.component';

describe('GettersetterComponent', () => {
  let component: GettersetterComponent;
  let fixture: ComponentFixture<GettersetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GettersetterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GettersetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
