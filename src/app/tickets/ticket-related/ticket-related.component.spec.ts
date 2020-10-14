import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketRelatedComponent } from './ticket-related.component';

describe('TicketRelatedComponent', () => {
  let component: TicketRelatedComponent;
  let fixture: ComponentFixture<TicketRelatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketRelatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketRelatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
