import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesAndPermComponent } from './roles-and-perm.component';

describe('RolesAndPermComponent', () => {
  let component: RolesAndPermComponent;
  let fixture: ComponentFixture<RolesAndPermComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RolesAndPermComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolesAndPermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
