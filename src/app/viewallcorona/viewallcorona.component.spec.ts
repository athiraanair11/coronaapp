import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallcoronaComponent } from './viewallcorona.component';

describe('ViewallcoronaComponent', () => {
  let component: ViewallcoronaComponent;
  let fixture: ComponentFixture<ViewallcoronaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallcoronaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewallcoronaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
