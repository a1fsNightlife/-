import { Component, OnInit } from '@angular/core';
import Todo from 'src/app/models/todo.model';
import { todos } from 'src/app/static/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = todos;
  
  constructor() { }

  ngOnInit(): void {
  }

}
