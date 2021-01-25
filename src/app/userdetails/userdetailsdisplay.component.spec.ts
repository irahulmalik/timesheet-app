import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdetailsdisplayComponent } from './userdetailsdisplay.component';

describe('UserdetailsdisplayComponent', () => {
  let component: UserdetailsdisplayComponent;
  let fixture: ComponentFixture<UserdetailsdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserdetailsdisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdetailsdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
