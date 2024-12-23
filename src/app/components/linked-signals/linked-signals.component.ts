import { Component, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-linked-signals',
  imports: [],
  templateUrl: './linked-signals.component.html',
  styleUrl: './linked-signals.component.css'
})
export class LinkedSignalsComponent {

  //once signal value change the computaion funtion will trggerd
  firstName = signal<string>("Reynand");
  lastName = signal<string>("Ocso");

  //linked Signal
  fullname = linkedSignal({
    //Check for the signal value changes
    source: this.firstName,
    //change val method
    computation: (newVal, prevVal) => {
      debugger;
      const fullname = newVal + " " + this.lastName()
      return fullname;
    }
  });

  //scnario: listen when Id is chnage
  user = signal({ id: 111, name: "Reynand"});

  email = linkedSignal({
    source: this.user,
    computation: user => `${user.name+user.id}@gmail.com`,
    equal: (a:any,b:any) => a.id !== b.id
  });


  changeName(){
    this.firstName.set("Jun");
  }

  changeId() {
    debugger;
    this.user.set({id: 123, name: "Reynand"})
  }



}
