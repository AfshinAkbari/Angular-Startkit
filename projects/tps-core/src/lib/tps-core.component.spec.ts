import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TpsCoreComponent } from './tps-core.component';

describe('TpsCoreComponent', () => {
  let component: TpsCoreComponent;
  let fixture: ComponentFixture<TpsCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TpsCoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TpsCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
