import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../../Task';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-tasks-item',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './tasks-item.component.html',
  styleUrl: './tasks-item.component.css'
})
export class TasksItemComponent implements OnInit{
  @Input() task! :Task;  //the '!' disables strick initialization  for task variable.
  @Output() onDeleteTask : EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

  faTimes = faTimes;
  constructor() {

  }
  onToggle(task: Task) {
    this.onToggleReminder.emit(task);
  }

  onDelete(task: Task) {
    console.log(`Delete method called for task id: ${task.id} and title: ${task.text} `);
    this.onDeleteTask.emit(task);
  }
  ngOnInit(): void {
    
  }

}