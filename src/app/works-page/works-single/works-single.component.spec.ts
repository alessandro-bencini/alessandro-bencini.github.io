import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksSingleComponent } from './works-single.component';

describe('WorksSingleComponent', () => {
  let component: WorksSingleComponent;
  let fixture: ComponentFixture<WorksSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorksSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
