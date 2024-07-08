import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
  
})
export class AddTaskComponent implements OnInit{
  text!: string;
  day!: string;
  reminder : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
}
