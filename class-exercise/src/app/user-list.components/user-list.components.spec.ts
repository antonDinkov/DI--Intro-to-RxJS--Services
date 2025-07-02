import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponents } from './user-list.components';

describe('UserListComponents', () => {
  let component: UserListComponents;
  let fixture: ComponentFixture<UserListComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserListComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserListComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
