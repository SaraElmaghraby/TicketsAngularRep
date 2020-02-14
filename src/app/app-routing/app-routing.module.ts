import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from "@angular/router"
import { NotFoundComponent } from '../component/not-found/not-found.component'
import { UserDetailsComponent } from "../component/user-details/user-details.component"
import { UserItemComponent } from "../component/user-item/user-item.component"
import { UsersComponent } from '../component/users/users.component';



const routes:Routes = [
  {path:"users" , component: UsersComponent }, 
  {path:"" , redirectTo:"users" , pathMatch:"full"}, 
  {path:"users/:id" , component: UserDetailsComponent },
  {path:"**" , component: NotFoundComponent },
]

@NgModule({
  declarations: [
    NotFoundComponent,
    UserDetailsComponent,
    UserItemComponent,
    UsersComponent
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
