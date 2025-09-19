import { Component, Input, inject } from '@angular/core';
import { type Task } from './task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: false,
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
