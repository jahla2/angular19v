import { Component } from '@angular/core';
import { NgClassComponent } from "./components/ng-class/ng-class.component";
import { SignalComponentComponent } from "./components/signal-component/signal-component.component";
import { LinkedSignalsComponent } from "./components/linked-signals/linked-signals.component";

@Component({
  selector: 'app-root',
  imports: [NgClassComponent, SignalComponentComponent, LinkedSignalsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular19v';
}
