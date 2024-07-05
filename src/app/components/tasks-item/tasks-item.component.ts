import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../Task';

@Component({
  selector: 'app-tasks-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tasks-item.component.html',
  styleUrl: './tasks-item.component.css'
})
export class TasksItemComponent implements OnInit{
  @Input() task! :Task;  //the '!' disables strick initialization  for task

  constructor() {

  }

  ngOnInit(): void {
    
  }
}