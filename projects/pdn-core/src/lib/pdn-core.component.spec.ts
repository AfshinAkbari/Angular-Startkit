import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdnCoreComponent } from './pdn-core.component';

describe('PdnCoreComponent', () => {
  let component: PdnCoreComponent;
  let fixture: ComponentFixture<PdnCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdnCoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdnCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
