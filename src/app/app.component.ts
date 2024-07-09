import { HeaderComponent } from './components/header/header.component';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskService } from './services/task.service';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
// ...

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    HeaderComponent, 
    ButtonComponent, 
    TasksComponent, 
    FormsModule,
    FooterComponent,
    AboutComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
}
