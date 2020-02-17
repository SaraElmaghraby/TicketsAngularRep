import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from "./app-routing/app-routing.module"
import { AppComponent } from './app.component';
import { UsersService } from './services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponentComponent } from './Components/home-page-component/home-page-component.component';
import { LoginComponentComponent } from './Component/login-component/login-component.component';
import { RegisterComponentComponent } from './Component/register-component/register-component.component';
import { OrderListComponentComponent } from './Component/order-list-component/order-list-component.component';
import { OrderDetailsComponentComponent } from './Component/order-details-component/order-details-component.component';
import { AdminOrderListComponentComponent } from './Component/admin-order-list-component/admin-order-list-component.component';
import { NotFoundComponentComponent } from './Component/not-found-component/not-found-component.component';
import { FooterComponent } from './Component/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponentComponent,
    LoginComponentComponent,
    RegisterComponentComponent,
    OrderListComponentComponent,
    OrderDetailsComponentComponent,
    AdminOrderListComponentComponent,
    NotFoundComponentComponent,
    FooterComponent,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
   
  ],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
