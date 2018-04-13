import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GastosrealizadosmovizeneditComponent } from './gastosrealizadosmovizenedit.component';

describe('GastosrealizadosmovizeneditComponent', () => {
  let component: GastosrealizadosmovizeneditComponent;
  let fixture: ComponentFixture<GastosrealizadosmovizeneditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GastosrealizadosmovizeneditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GastosrealizadosmovizeneditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
