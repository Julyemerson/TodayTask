import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  title: string = 'Task Today';

  constructor() {}

  ngOnInit(): void {}

  toggleAddTask() {
    console.log('Apertei o botão e emitir o evento');
  }
}
