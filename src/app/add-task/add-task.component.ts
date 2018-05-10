import { Component, EventEmitter, Output } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  @Output() close: EventEmitter<boolean> = new EventEmitter();

  constructor(private taskService: TaskService) { }
  submit({title, description}) {
    this.taskService.addTask(title, description);
    this.close.emit(true); // let our parent know that shit's submitted.
  }
}
