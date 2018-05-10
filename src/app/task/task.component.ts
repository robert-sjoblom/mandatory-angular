import { Component, Input } from '@angular/core';
import { TaskService } from '../task.service';
import { UtilService } from '../util.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() task;
  constructor(private utilService: UtilService, private taskService: TaskService) { }

  onChange(id, val) {
    this.taskService.updateTask(id, val);
  }
}
