import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import { StatusType, Task } from './constants';

export class TaskService {

  private taskId = 0;
  private tasks: Task[] = [];
  private BehaviorSubject = new Subject<Task[]>();
  // add class properties for:

  // an instance of BehaviorSubject

  getTasks(status: StatusType): Observable<Task[]> {
    return this.BehaviorSubject.asObservable()
      .map(
        _tasks => _tasks.filter(
          task => task.status === status
        )
      );
  }

  updateTask(id: number, status: StatusType) {
    // complete the code to update a task's status...
  }

  addTask(title: string, description: string) {
    console.log(`TASK-SERVICE/addTask:
    title: ${title}, description: ${description}`);
    this.tasks.push({
      id: ++this.taskId,
      title,
      description,
      status: StatusType.NotStarted
    });
    this.updateSubscribers();
  }
  updateSubscribers() {
    console.log('UPDATING SUBSCRIBERS!');
    this.BehaviorSubject.next(this.tasks);
  }

}
