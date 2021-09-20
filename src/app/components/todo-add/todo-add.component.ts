import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  todoAddForm : FormGroup;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }

  createTodoAddForm(){
    this.todoAddForm = this.formBuilder.group({
      userId: ["",Validators.required],
      id: ["",Validators.required],
      title:["",Validators.required]
      

    })
  }

}
