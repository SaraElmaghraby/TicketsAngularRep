import { Component, OnInit, Inject } from '@angular/core';
import { TodoService } from '../todo.service';
import { element } from 'protractor';
import { Todo } from 'src/app/todo.model';
import { analytics } from 'firebase';
import { title } from 'process';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
// toDoListArray:any[];
//todos:Todo[];
todos:any;
  todoTitle:string;
todoIschecked:boolean;
  constructor(@Inject(TodoService) private toDoService:TodoService) { 
    
  }

  ngOnInit() {

    this.toDoService.getToDoList().subscribe(data => {
      this.todos = data.map(e => {
        return {
          id: e.payload.doc.id,
          title: e.payload.doc.data()['title'],
          isChecked:e.payload.doc.data()['isChecked']
        } as Todo;
      })
    });
    //....
    // this.toDoListArray=[];
    // this.toDoService.getToDoList().snapshotChanges()
    // .subscribe(item=>{
    //   this.toDoListArray=[];
    //   item.forEach(element=>{
    //     var x=element.payload.toJSON();
    //     x["$key"]=element.key;
    //     this.toDoListArray.push(x);
    //   })
    //   //sort array ischecked false-> true
    //   this.toDoListArray.sort((a,b)=>{
    //     return a.isChecked - b.isChecked;
    //   })
    // });

  }
//   create(todo){

//     this.toDoService.createToDoList(todo);
// }

update(Record) {
  let record = {};
   
   // record['title'] = Record.todoTitle;
    record['isChecked'] = Record.isChecked;
  this.toDoService.updateToDoList(Record.id,record);
}

delete(id: string) {
  this.toDoService.deleteToDoList(id);
}

  onAdd(){
    let record = {};
    // this.todoTitle=title;
    this.todoIschecked=false;
    record['title'] = this.todoTitle;
    record['isChecked'] = this.todoIschecked;
    //var todoobj=Object.assign(itemTitle.value,Object);
    this.toDoService.createToDoList(record).then(resp => {
      this.todoTitle = "";
      this.todoIschecked = false;
     
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });;
    //itemTitle.value=null;
  }

}
