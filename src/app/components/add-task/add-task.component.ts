import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent implements OnInit{
  text!: string;
  day!: string;
  reminder : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
}
