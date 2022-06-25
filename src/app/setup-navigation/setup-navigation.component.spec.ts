import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupNavigationComponent } from './setup-navigation.component';

describe('SetupNavigationComponent', () => {
  let component: SetupNavigationComponent;
  let fixture: ComponentFixture<SetupNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetupNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
