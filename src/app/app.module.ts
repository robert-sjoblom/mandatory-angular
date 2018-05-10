import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AddTaskComponent } from './add-task/add-task.component';
import { AppComponent } from './app.component';
import { TaskService } from './task.service';
import { TaskComponent } from './task/task.component';
import { TaskboardComponent } from './taskboard/taskboard.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { UtilService } from './util.service';



@NgModule({
  declarations: [
    AppComponent,
    TaskboardComponent,
    TasklistComponent,
    TaskComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TaskService, UtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
