import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from "@angular/router"
import { HomePageComponentComponent } from '../Components/home-page-component/home-page-component.component';
import { LoginComponentComponent } from '../Component/login-component/login-component.component';
import { RegisterComponentComponent } from '../Component/register-component/register-component.component';
import { OrderListComponentComponent } from '../Component/order-list-component/order-list-component.component';
import { OrderDetailsComponentComponent } from '../Component/order-details-component/order-details-component.component';
import { NotFoundComponentComponent } from '../Component/not-found-component/not-found-component.component';
import { FooterComponent } from '../Component/footer/footer.component';




const routes:Routes = [
  {path:"homepage" , component: HomePageComponentComponent }, 
  {path:"homepage/footer" , component: FooterComponent }, 
  {path:"" , redirectTo:"homepage" , pathMatch:"full"}, 
  {path:"homepage/login" , component:  LoginComponentComponent },
  {path:"homepage/register" , component:  RegisterComponentComponent },
  {path:"homepage/orderlist" , component:  OrderListComponentComponent },
  {path:"homepage/order" , redirectTo:"homepage/orderlist" , pathMatch:"full" },
  {path:"homepage/orderlist/orderdetails" , component:  OrderDetailsComponentComponent },
  {path:"**" , component: NotFoundComponentComponent },

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
