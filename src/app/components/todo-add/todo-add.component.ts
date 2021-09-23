import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  todoAddForm : FormGroup;
  constructor(private formBuilder:FormBuilder,
    private todoService:TodoService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
  }

  createTodoAddForm(){
    this.todoAddForm = this.formBuilder.group({
      userId: ["",Validators.required],
      id: ["",Validators.required],
      title:["",Validators.required]
      

    })
  }

  add(){

    if(this.todoAddForm.valid){
      let todoModel = Object.assign({}, this.todoAddForm.value)
      this.todoService.add(todoModel)
      this.toastrService.success("İş eklendi", "Başarılı")
    }else{
      this.toastrService.error("Formunuz eksik", "Dikkat")

    }
  }

}
