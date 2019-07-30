import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  private todoList: TodoItem[] = [
    {title: 'install NodeJS'},
    {title: 'install Angular CLI'},
  ];

  constructor() { }

  getTodoList() {
    return this.todoList;
  }
  addItem(item: TodoItem) {
    this.todoList.push(item);
  }
}
