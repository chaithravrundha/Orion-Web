import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TicketComponent } from './ticket/ticket.component';
import { TicketsComponent } from './tickets/tickets.component';

const ticketsRoutes: Routes = [
  { path: 'tickets',  component: TicketsComponent },
  { path: 'tickets/:id', component: TicketComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(ticketsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TicketsRoutingModule { }