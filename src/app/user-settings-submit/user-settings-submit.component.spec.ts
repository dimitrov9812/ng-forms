import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSettingsSubmitComponent } from './user-settings-submit.component';

describe('UserSettingsSubmitComponent', () => {
  let component: UserSettingsSubmitComponent;
  let fixture: ComponentFixture<UserSettingsSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSettingsSubmitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSettingsSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
