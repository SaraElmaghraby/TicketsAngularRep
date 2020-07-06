import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { Todo } from 'src/app/todo.model';
import { title } from 'process';
// @angular/fire/angularfire2
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  toDoList: AngularFireList<any>;
  /*private firebasedb:AngularFireDatabase*/
  constructor(private firestore: AngularFirestore) {}

  getToDoList(){
    return this.firestore.collection('todos').snapshotChanges();
  }

createToDoList(Todo){
  return this.firestore.collection('todos').add(Todo);
}
 
  updateToDoList(todoId,record){
    this.firestore.doc('todos/' + todoId).update(record);
}

deleteToDoList(todoId: string){
  this.firestore.doc('todos/' + todoId).delete();
}

//getToDoList(){
  // this.toDoList=this.firebasedb.list('titles');
  // return this.toDoList;
//}

//  addTitles(title:string){
//     this.toDoList.push({
//       // id:1,
//       title:title,
//       isChecked:false
//    });
//   }

//   checkOrUncheckTitle($key:string,flag:boolean){
// this.toDoList.update($key,{isChecked:flag});
//   }

  // removeTitle($key:string){
  //   this.toDoList.remove($key);
  // }
}
