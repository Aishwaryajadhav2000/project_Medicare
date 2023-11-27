import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmedicinesComponent } from './addmedicines.component';

describe('AddmedicinesComponent', () => {
  let component: AddmedicinesComponent;
  let fixture: ComponentFixture<AddmedicinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmedicinesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddmedicinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
