import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/services/ticket.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})
export class TicketDetailsComponent implements OnInit {
  message = '';
  currentTicket = null;
  constructor(private ticketService: TicketService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.message = '';
    this.getTicket(this.route.snapshot.paramMap.get('id'));
  }
  getTicket(id) {
    this.ticketService.get(id)
      .subscribe(
        data => {
          this.currentTicket = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateTicket() {
    
    this.ticketService.update(this.currentTicket.id, this.currentTicket)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The ticket was updated successfully!';
          this.router.events.subscribe(val => {
           this.router.navigate(['/tutorials']).then();
        });
          
        },
        error => {
          console.log(error);
        });
  }
  deleteTutorial() {
    this.ticketService.delete(this.currentTicket.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/tickets']);
        },
        error => {
          console.log(error);
        });
  }

}
