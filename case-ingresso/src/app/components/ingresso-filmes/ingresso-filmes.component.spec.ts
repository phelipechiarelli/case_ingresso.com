import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngressoFilmesComponent } from './ingresso-filmes.component';

describe('IngressoFilmesComponent', () => {
  let component: IngressoFilmesComponent;
  let fixture: ComponentFixture<IngressoFilmesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngressoFilmesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngressoFilmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
