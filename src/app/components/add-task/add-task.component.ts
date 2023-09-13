import { Component } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  constructor() {
    this.text = '';
    this.day = '';
    this.reminder = false;
  }

  text: string;
  day: string;
  reminder: boolean = false;
}
