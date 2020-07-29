import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from "@angular/router";
import { TicketsListComponent } from '../components/tickets-list/tickets-list.component';
import { TicketDetailsComponent } from '../components/ticket-details/ticket-details.component';
import { LogComponent } from '../components/log/log.component';




const routes:Routes = [
  
  {
    path: '', redirectTo: '/tutorials', pathMatch: 'full' },
  { path: 'tutorials', component: TicketsListComponent },
  { path: 'tickets/:id', component: TicketDetailsComponent },
  {path:'logs',component:LogComponent}


]

@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
