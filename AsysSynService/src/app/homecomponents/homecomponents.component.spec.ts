import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomecomponentsComponent } from './homecomponents.component';

describe('HomecomponentsComponent', () => {
  let component: HomecomponentsComponent;
  let fixture: ComponentFixture<HomecomponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomecomponentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomecomponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
