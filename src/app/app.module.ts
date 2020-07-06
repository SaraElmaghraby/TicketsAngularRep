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
import { TodoComponent } from './todo/todo.component';
import { app } from 'firebase';
import { FormsModule } from '@angular/forms';
@NgModule({
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    TodoComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
   AngularFirestoreModule,
   FormsModule,
   RouterModule.forRoot([
    { path: '', component: TodoComponent },
  ])
   
  ],
 
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
