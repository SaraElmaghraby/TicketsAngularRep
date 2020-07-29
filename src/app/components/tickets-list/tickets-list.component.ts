import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-tickets-list',
  templateUrl: './tickets-list.component.html',
  styleUrls: ['./tickets-list.component.css']
})
export class TicketsListComponent implements OnInit {
tickets: any;
currentTicket=null;
currentIndex = -1;
Name:any;
Status:any;
TicketsContent:any;
CreationDate:any;
LastStatusChangedDate:any;
UserId:any;
  constructor(private ticketService:TicketService) { }

  ngOnInit() {
    
    this.retrieveTickets();
  }
  retrieveTickets() {
    this.ticketService.getAll()
      .subscribe(
        data => {
          this.tickets = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  searchUserTicket() {
    this.ticketService.getUserTicket(this.UserId)
      .subscribe(
        data => {
          this.tickets = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList() {
    this.retrieveTickets();
    this.currentTicket = null;
    this.currentIndex = -1;
  }

  setActiveTutorial(tutorial, index) {
    this.currentTicket = tutorial;
    this.currentIndex = index;
  }

  

}
