import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatAdderComponent } from './cat-adder.component';

describe('CatAdderComponent', () => {
  let component: CatAdderComponent;
  let fixture: ComponentFixture<CatAdderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatAdderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
