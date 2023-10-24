import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../../types/todos';
import { TodoMenuComponent } from './todo-menu/todo-menu.component';
import { HlmBadgeDirective } from '@spartan-ng/ui-badge-helm';
import {
  AlertTriangle,
  Check,
  Circle,
  LucideAngularModule,
} from 'lucide-angular';

@Component({
  selector: 'harmony-todo',
  standalone: true,
  imports: [
    CommonModule,
    TodoMenuComponent,
    HlmBadgeDirective,
    LucideAngularModule,
  ],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  @Input() index = 0;
  @Input() todo: Todo = {
    id: 0,
    text: '',
    done: false,
  };
  @Output() deleteTodo = new EventEmitter<number>();
  @Output() toggleTodo = new EventEmitter<number>();

  onDeleteTodo() {
    this.deleteTodo.emit(this.index);
  }

  onToggleTodo() {
    this.toggleTodo.emit(this.index);
  }

  protected readonly Check = Check;
  protected readonly Circle = Circle;
  protected readonly AlertTriangle = AlertTriangle;
}
