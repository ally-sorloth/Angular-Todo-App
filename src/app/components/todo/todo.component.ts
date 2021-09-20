import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todos:Todo[]=[];
  filterText="";

  constructor(private todoService:TodoService, 
    private toastrService:ToastrService,
    private cartService:CartService) { }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(){
    this.todoService.getTodos().subscribe(response=>{
      this.todos = response
    })
  }

  addToCart(todo:Todo){
    this.toastrService.success("Sepete eklendi",todo.title)
    this.cartService.addToCart(todo);
  }
}
