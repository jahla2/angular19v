import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  //create variable
  firstName: string = "Reynand";
  rollNo: number = 121;
  isActive: boolean = true;
  currentDate: Date = new Date();
  myPlaceHolder: string = "Enter Full Name";
  div1ClassName: string = "bg-primary";
  selectedCity: string = "";

  constructor() {
    console.log(this.firstName);

    this.isActive = false;
    console.log(this.isActive);

  }

  //func
  showWelcomeMessage() {
    alert("Angular 19 basics");
  }

  onCityChange() {
    console.log("City Change!");
  }

}
