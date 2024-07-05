import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
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
  @Input() task! :Task;  //the '!' disables strick initialization  for task
  faTimes = faTimes;
  constructor() {

  }

  ngOnInit(): void {
    
  }
}