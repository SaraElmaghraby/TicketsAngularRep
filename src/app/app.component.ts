// import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/services/ticket.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[TicketService]

})
export class AppComponent {
  title = 'app';
  
}
