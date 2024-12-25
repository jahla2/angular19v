import { state } from '@angular/animations';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {

  userForm: FormGroup = new FormGroup({
    firstName: new FormControl("", [Validators.required]),
    lastName: new FormControl("", [Validators.required, Validators.minLength(5)]),
    userName: new FormControl("", Validators.email),
    city: new FormControl(""),
    state: new FormControl("Tandag"),
    zip: new FormControl(""),
    isUserAggree: new FormControl(false)
  });

  constructor() {
    this.userForm.controls['state'].disable();
    setTimeout(() => {
      this.userForm.controls['state'].enable();
    }, 5000);
  }

  onUserSave() {
    this.userForm.value;
    debugger;
  }
}
