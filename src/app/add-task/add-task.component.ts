import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  submit({title, description}) {
    console.log(`ADD-TASK/submit:
    title: ${title}, description: ${description}`);

    this.taskService.addTask(title, description);
  }
}
