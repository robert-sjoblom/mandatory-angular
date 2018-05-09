import { Component, OnInit } from '@angular/core';
import { UtilService } from '../util.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'task-board',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.css']
})
export class TaskboardComponent implements OnInit {
  display: false;
  statusTypes: string[];

  constructor(private utilService: UtilService) {}

  ngOnInit() {
    this.statusTypes = this.utilService.getStatusTypes();
    console.log(this.statusTypes);
  }
}
