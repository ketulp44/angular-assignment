import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainertopComponent } from './containertop.component';

describe('ContainertopComponent', () => {
  let component: ContainertopComponent;
  let fixture: ComponentFixture<ContainertopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainertopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainertopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
