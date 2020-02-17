import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOrderListComponentComponent } from './admin-order-list-component.component';

describe('AdminOrderListComponentComponent', () => {
  let component: AdminOrderListComponentComponent;
  let fixture: ComponentFixture<AdminOrderListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminOrderListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOrderListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
