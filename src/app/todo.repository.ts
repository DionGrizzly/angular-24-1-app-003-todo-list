import { Injectable } from '@angular/core';
import { Todo } from './shared/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoRepository {

  private todos: Todo[] = [];

  public getTodoList(): Todo[] {
    return this.todos;
  }

  public addTodo(title: string): void {
    const id = (Math.random() + 1).toString(36).substring(7);
    const newTodo: Todo = { id, title, completed: false };
    this.todos.push(newTodo);
  }

  public deleteTodo(id: string): void {
    this.todos = this.todos.filter(item => item.id != id);
  }

  public activeTodo(id: string): void {
    this.todos = this.todos.map((todo) => {
      if (todo.id == id) {
        return {
          ...todo,
          completed: !todo.completed,
        }
      }
      return todo;
    })
  }
}
