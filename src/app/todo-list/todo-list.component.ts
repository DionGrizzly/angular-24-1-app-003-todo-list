import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/todo.interface';
import { TodoRepository } from '../todo.repository';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  public todo: Todo[] = [];
  public filter: string = 'all'

  constructor(private todoRepository: TodoRepository) {}

  ngOnInit(): void {
    this.todo = this.todoRepository.getTodoList();
  }

  public getTodo(): Todo[] {
    return this.todoRepository.getTodoList();
  }

  public onDeleteTodo(id: string): void {
    this.todoRepository.deleteTodo(id)
  }

  public onActiveTodo(id: string): void {
    this.todoRepository.activeTodo(id)
  }
  
  public getFilteredTodo(): Todo[] {
    let filteredTodo = this.todoRepository.getTodoList();
    switch (this.filter) {
      case 'completed':
        return filteredTodo.filter(item => item.completed === true)
      case 'inCompleted':
        return filteredTodo.filter(item => item.completed === false)
      default:
        return filteredTodo;
    }
  }
}
