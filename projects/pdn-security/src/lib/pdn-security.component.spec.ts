import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdnSecurityComponent } from './pdn-security.component';

describe('PdnSecurityComponent', () => {
  let component: PdnSecurityComponent;
  let fixture: ComponentFixture<PdnSecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdnSecurityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdnSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
