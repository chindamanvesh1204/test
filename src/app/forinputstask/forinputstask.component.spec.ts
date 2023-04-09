import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForinputstaskComponent } from './forinputstask.component';

describe('ForinputstaskComponent', () => {
  let component: ForinputstaskComponent;
  let fixture: ComponentFixture<ForinputstaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForinputstaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForinputstaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
