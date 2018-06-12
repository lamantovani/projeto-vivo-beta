import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogIniciarProcessoComponent } from './dialog-iniciar-processo.component';

describe('DialogIniciarProcessoComponent', () => {
  let component: DialogIniciarProcessoComponent;
  let fixture: ComponentFixture<DialogIniciarProcessoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogIniciarProcessoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogIniciarProcessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
