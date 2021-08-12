import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeX6Component } from './tree-x6.component';

describe('TreeX6Component', () => {
  let component: TreeX6Component;
  let fixture: ComponentFixture<TreeX6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreeX6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeX6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
