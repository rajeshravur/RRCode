import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestinAngularComponent } from './testin-angular.component';

describe('TestinAngularComponent', () => {
  let component: TestinAngularComponent;
  let fixture: ComponentFixture<TestinAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestinAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestinAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
