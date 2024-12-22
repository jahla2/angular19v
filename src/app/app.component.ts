import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminComponent } from "./components/admin/admin.component";
import { UserComponent } from './components/user/user.component';
import { SingleComponentComponent } from "./components/single-component/single-component.component";

@Component({
  selector: 'app-root',
  imports: [AdminComponent, UserComponent, SingleComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular19v';
}
