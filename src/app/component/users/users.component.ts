import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private myService:UsersService) {

   }

  ngOnInit() {
    this.getUsers();
  }

  users=[];

  getUsers(){
    this.myService.users().subscribe( (incomingUsers:[]) =>{
      this.users=incomingUsers;
      console.log("get all users");
    } ,(err) => {
      console.log(err);
      
    })
  }

}
