import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-list-manager',
    template: `
      <app-input-button-unit (submit)="addItem($event)"></app-input-button-unit>

      <ul>
        <li *ngFor="let todoItem of todoList">
          <app-todo-item [item]="todoItem"></app-todo-item>
        </li>
      </ul>
  `,
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {

  todoList: TodoItem[] = [
    {title: 'install NodeJS'},
    {title: 'install Angular CLI'},
  ];

  addItem(value: string) {
    this.todoList.push({ title: value });
  }
  constructor() { }

  ngOnInit() {
  }

  addItem(title: string) {
    this.todoList.push({ title });
  }
}
