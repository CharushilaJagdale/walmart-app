import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavrtComponent } from './favrt.component';

describe('FavrtComponent', () => {
  let component: FavrtComponent;
  let fixture: ComponentFixture<FavrtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavrtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavrtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
