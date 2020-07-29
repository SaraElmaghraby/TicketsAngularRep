import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { RouterModule } from '@angular/router'; // add this line
import { AppRoutingModule } from "./app-routing/app-routing.module"
import { AppComponent } from './app.component';
import { UsersService } from './services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { app } from 'firebase';
import { FormsModule } from '@angular/forms';
import { TicketDetailsComponent } from './components/ticket-details/ticket-details.component';
import { TicketsListComponent } from './components/tickets-list/tickets-list.component';
import { LogComponent } from './components/log/log.component';
@NgModule({
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    TicketDetailsComponent,
    TicketsListComponent,
    LogComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireDatabaseModule,
   AngularFirestoreModule,
   FormsModule,
  //  RouterModule.forRoot([
  //   { path: '', component:  },
  // ])
   
  ],
 
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
