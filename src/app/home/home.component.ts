import { Component, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todos } from '../../types/todos';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { TodoComponent } from './todo/todo.component';

@Component({
  selector: 'harmony-home',
  standalone: true,
  imports: [CommonModule, HlmButtonDirective, TodoComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  todos: Todos = [
    {
      id: 1,
      text: 'Learn Angular',
      done: false,
    },
  ];

  addItem(text: string) {
    this.todos.unshift({
      id: this.todos.length + 1,
      text,
      done: false,
    });
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  toggleTodoDone(id: number) {
    this.todos = this.todos.map((todo) => {
      if (todo.id === id) {
        todo.done = !todo.done;
      }
      return todo;
    });
  }
}
