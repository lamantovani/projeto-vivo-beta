import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroTesteComponent } from './cadastro-teste.component';

describe('CadastroTesteComponent', () => {
  let component: CadastroTesteComponent;
  let fixture: ComponentFixture<CadastroTesteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroTesteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
