import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../models/ticket';

@Component({
  selector: 'plx-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  ticket: Ticket = {
    Id: 1,
    Caller: 'David Good',
    Created: new Date(Date.now()),
    CreatedBy: 'dgood',
    PhoneNumber: '541-601-3119',
    selected: false
  };

  constructor() { }

  ngOnInit(): void {
  }

}
