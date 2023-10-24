import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  Renderer2,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  HlmMenuItemSubIndicatorComponent,
  HlmMenuLabelComponent,
  HlmMenuSeparatorComponent,
  HlmMenuShortcutComponent,
} from '@spartan-ng/ui-menu-helm';
import { BrnMenuTriggerDirective } from '@spartan-ng/ui-menu-brain';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { NgIcon } from '@ng-icons/core';
import {
  BookmarkCheck,
  BookmarkX,
  Check,
  Circle,
  LucideAngularModule,
  MoreHorizontal,
  Trash2,
  XCircle,
} from 'lucide-angular';

@Component({
  selector: 'harmony-todo-menu',
  standalone: true,
  imports: [
    CommonModule,
    HlmMenuLabelComponent,
    HlmMenuSeparatorComponent,
    BrnMenuTriggerDirective,
    HlmMenuItemSubIndicatorComponent,
    HlmMenuShortcutComponent,
    HlmButtonDirective,
    NgIcon,
    LucideAngularModule,
  ],
  templateUrl: './todo-menu.component.html',
  styleUrls: ['./todo-menu.component.css'],
})
export class TodoMenuComponent {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  @Input() done: boolean = false;
  @Output() toggleTodo = new EventEmitter<void>();
  @Output() deleteTodo = new EventEmitter<void>();

  onDeleteTodo() {
    this.deleteTodo.emit();
  }

  onToggleTodo() {
    this.toggleTodo.emit();
  }

  closeMenu(button: HTMLButtonElement) {
    button.click();
  }

  protected readonly MoreHorizontal = MoreHorizontal;
  protected readonly Trash2 = Trash2;
  protected readonly Check = Check;
  protected readonly Circle = Circle;
  protected readonly BookmarkX = BookmarkX;
  protected readonly BookmarkCheck = BookmarkCheck;
  protected readonly XCircle = XCircle;
}
