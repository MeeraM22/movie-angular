import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMoviesUserComponent } from './view-movies-user.component';

describe('ViewMoviesUserComponent', () => {
  let component: ViewMoviesUserComponent;
  let fixture: ComponentFixture<ViewMoviesUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMoviesUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMoviesUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
