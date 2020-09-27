import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntranceMapComponent } from './entrance-map.component';

describe('EntranceMapComponent', () => {
  let component: EntranceMapComponent;
  let fixture: ComponentFixture<EntranceMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntranceMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntranceMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
