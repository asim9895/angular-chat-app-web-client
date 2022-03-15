import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleStreamComponent } from './single-stream.component';

describe('SingleStreamComponent', () => {
  let component: SingleStreamComponent;
  let fixture: ComponentFixture<SingleStreamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleStreamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleStreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
