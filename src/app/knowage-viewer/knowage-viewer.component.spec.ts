import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowageViewerComponent } from './knowage-viewer.component';

describe('KnowageViewerComponent', () => {
  let component: KnowageViewerComponent;
  let fixture: ComponentFixture<KnowageViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowageViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowageViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
