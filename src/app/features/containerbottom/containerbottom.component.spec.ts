import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerbottomComponent } from './containerbottom.component';

describe('ContainerbottomComponent', () => {
  let component: ContainerbottomComponent;
  let fixture: ComponentFixture<ContainerbottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerbottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerbottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
