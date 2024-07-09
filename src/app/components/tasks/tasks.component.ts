import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';
import { TasksItemComponent } from '../tasks-item/tasks-item.component';
import { AddTaskComponent } from '../add-task/add-task.component';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TasksItemComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
// export class TasksComponent implements OnInit{
//   tasks : Task[] = []; //declared as an empty array of task
//   constructor (private taskService :TaskService) {} 
//   //we declare an arguement private in constructor as type -> TaskService
//   ngOnInit(): void {
//     this.taskService.getTasks().subscribe((tasks)=> {
//       this.tasks = tasks;
//     });
//   }
//   //then we intialize the taskservice as a getTasks() from taskservice.ts
//   // we subscribe to it and declare a function so that we get tasks

//   deleteTask(task: Task) {
//     this.taskService
//       .deleteTask(task)
//       .subscribe(
//         () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
//       );
//   }


//   ToggleReminder(task: Task) {
//     task.reminder =! task.reminder; //opposite the value
//     this.taskService.updateTaskReminder(task).subscribe();
//   }

// }

export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  deleteTask(task: Task) {
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((task) => this.tasks.push(task));
  }
}