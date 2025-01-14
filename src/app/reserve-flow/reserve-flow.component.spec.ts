import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveFlowComponent } from './reserve-flow.component';

describe('ReserveFlowComponent', () => {
  let component: ReserveFlowComponent;
  let fixture: ComponentFixture<ReserveFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReserveFlowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReserveFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
