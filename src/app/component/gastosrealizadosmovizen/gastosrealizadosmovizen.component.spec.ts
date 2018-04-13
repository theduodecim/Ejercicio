import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GastosrealizadosmovizenComponent } from './gastosrealizadosmovizen.component';

describe('GastosrealizadosmovizenComponent', () => {
  let component: GastosrealizadosmovizenComponent;
  let fixture: ComponentFixture<GastosrealizadosmovizenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GastosrealizadosmovizenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GastosrealizadosmovizenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
