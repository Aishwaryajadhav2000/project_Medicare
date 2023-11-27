import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatemedComponent } from './updatemed.component';

describe('UpdatemedComponent', () => {
  let component: UpdatemedComponent;
  let fixture: ComponentFixture<UpdatemedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatemedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatemedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
