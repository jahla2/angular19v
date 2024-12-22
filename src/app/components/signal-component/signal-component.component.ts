import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal-component',
  imports: [],
  templateUrl: './signal-component.component.html',
  styleUrl: './signal-component.component.css'
})
export class SignalComponentComponent {

  //signal name = signal value
  firstName = signal("Reynand");

  lastName = signal<string>("Ocso");
  
  courseName: string = "Angular"; 

  rollNo = signal<number>(0);

  constructor() {
    const value = this.firstName();
    setTimeout(() => {
      this.courseName = "React Native";
      this.firstName.set("Cj");
      debugger;
    });
  }


  onIncrement() {
    this.rollNo.update(oldValue => oldValue+1);
  }


}
