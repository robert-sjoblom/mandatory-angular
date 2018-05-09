import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Task } from '../constants';
import { TaskService } from '../task.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'task-list',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit, OnDestroy {
  @Input() statusType;
  subscription: Subscription;
  tasks: Task[];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.subscription = this.taskService.getTasks(this.statusType)
      .subscribe(tasks => this.tasks = tasks);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
