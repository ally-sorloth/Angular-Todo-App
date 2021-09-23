import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/responseModel';
import { Todo } from '../models/todo';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  apiUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private httpClient: HttpClient) { }

  getTodos():Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.apiUrl);
  }

  add(todo:Todo):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.add+"product/add",todo)
  }
}
