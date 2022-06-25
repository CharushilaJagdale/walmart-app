import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByKeywordComponent } from './by-keyword.component';

describe('ByKeywordComponent', () => {
  let component: ByKeywordComponent;
  let fixture: ComponentFixture<ByKeywordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByKeywordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByKeywordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
