import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecionaRegiaoComponent } from './seleciona-regiao.component';

describe('SelecionaRegiaoComponent', () => {
  let component: SelecionaRegiaoComponent;
  let fixture: ComponentFixture<SelecionaRegiaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelecionaRegiaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecionaRegiaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
