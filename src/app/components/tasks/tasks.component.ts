import { Component } from '@angular/core';
import { Task } from 'src/app/interfaces/Task';
import { TASKS } from '../../mock/mock-task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  tasks: Task[] = TASKS;
}
