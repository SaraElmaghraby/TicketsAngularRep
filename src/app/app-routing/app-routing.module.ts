import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from "@angular/router";
import { TodoComponent } from '../todo/todo.component';




const routes:Routes = [
  
  {path:"todolist",component:TodoComponent},//added
  // {path:"**" , component: NotFoundComponentComponent },

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
