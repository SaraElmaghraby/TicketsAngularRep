import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  id
  user: any = {}
  

  constructor(private myService:UsersService , private myActivateRoute:ActivatedRoute , private router:Router) { 
    console.log(myActivateRoute);
    // console.log(router);
    this.id = myActivateRoute.snapshot.params.id;
  }
  mainPage(){
    // console.log("errror")
    this.router.navigate(['users']);
    // location.href="https://www.google.com/"
  }

  ngOnInit() {
    this.getUserById()

  }

  getUserById(){
  //  console.log(this.myService.url);
  this.myService.usersById(this.id).subscribe( (incomingStudents) => {
    // console.log(incomingStudents)
    this.user=incomingStudents;
  }, (err) => {
    console.log(err);
    
  } )
    
  }

  

}
