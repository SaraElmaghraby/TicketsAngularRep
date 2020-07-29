import { Component, OnInit } from '@angular/core';
import {LogService} from 'src/app/services/log.service'

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
logs:any;
id:any;
  constructor(private logService:LogService) { }

  ngOnInit() {
    this.retrieveLogs();
  }
  retrieveLogs() {
    this.logService.getAll()
      .subscribe(
        data => {
          this.logs = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
  // /"ticketId": 1,
  // "userId": 1,
  // "action": "firstLog",
  // "logDateTime":/  