import { Injectable } from '@angular/core';
import { Task } from '../interfaces/Task';
import { TASKS } from '../mock/mock-task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  getTasks(): Task[] {
    return TASKS;
  }
}
