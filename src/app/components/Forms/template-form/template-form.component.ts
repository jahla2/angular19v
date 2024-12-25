import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { zip } from 'rxjs';

@Component({
  selector: 'app-template-form',
  imports: [FormsModule,NgIf],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {

  //create object to bind in form elements
  userObj:  any = {
    firstName: '',
    lastName: '',
    userName: '',
    city: '',
    state: 'Tandag',
    zip: '',
    isTermAggree: false
  };

  onSave() {
    debugger;
    const formValue = this.userObj;
  }
}
