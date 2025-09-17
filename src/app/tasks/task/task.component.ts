import { Component, Input, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { type Task } from './task.model';
import { CardComponent } from "../../shared/card/card.component"; //type não é obrigatório, mas um padrão
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) task!: Task;
  private tasksServices = inject(TasksService)
  onCompleteTask() {
    this.tasksServices.removeTask(this.task.id)
  }
}
