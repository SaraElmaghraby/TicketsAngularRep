import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private myHttp:HttpClient) { 

  }

  // url:string = "http://localhost:3000/users";
  // url:string = "http://localhost:3000/api/product";
  url:string = "http://localhost:3000/api/user/all";

  

  
  
  users(){
    return this.myHttp.get(this.url);
  }

  usersById(id){
    return this.myHttp.get(`${this.url}/${id}`);
  }
}
