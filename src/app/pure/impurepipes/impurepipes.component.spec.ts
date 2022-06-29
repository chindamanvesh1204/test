import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpurepipesComponent } from './impurepipes.component';

describe('ImpurepipesComponent', () => {
  let component: ImpurepipesComponent;
  let fixture: ComponentFixture<ImpurepipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpurepipesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImpurepipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
