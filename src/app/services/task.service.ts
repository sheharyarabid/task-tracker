import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../Task';
// import { TASKS } from '../mock-task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/Json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiURL = 'http://localhost:5000/tasks'
  constructor(private http :HttpClient) { }
  //backend data handling
  getTasks = () : Observable<Task[]> => {
    // get service from moc tasks file
    // const tasks = of(TASKS)
    // return tasks; 
     
    //gets service from db.json
   return this.http.get<Task[]>(this.apiURL)
    
  }
  deleteTasks  = (task : Task) : Observable<Task> => {
    const url = `${this.apiURL}/${task.id}`;
    return this.http.delete<Task>(url);    
  }

  updateTaskReminder = (task: Task) : Observable<Task> => {
    const url = `${this.apiURL}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions);   

  }
}
