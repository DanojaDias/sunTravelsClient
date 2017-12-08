import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRoomTypeDetailsComponent } from './add-room-type-details.component';

describe('AddRoomTypeDetailsComponent', () => {
  let component: AddRoomTypeDetailsComponent;
  let fixture: ComponentFixture<AddRoomTypeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRoomTypeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRoomTypeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
