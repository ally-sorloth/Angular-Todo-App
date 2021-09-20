import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoAddComponent } from './components/todo-add/todo-add.component';
import { TodoComponent } from './components/todo/todo.component';

const routes: Routes = [
  {path:"", pathMatch:"full", component:TodoComponent},
  {path:"todos", component:TodoComponent},
  {path:"todos/add", component:TodoAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
