import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-user-registration',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css'
})
export class UserRegistrationComponent {
  userRegistrationForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormGroup({
      city: new FormControl('', [Validators.required, Validators.minLength(2)]),
      subcity: new FormControl('', [Validators.required, Validators.minLength(2)]),
      woreda: new FormControl('', [Validators.required, Validators.minLength(2)]),
    })
  });

  handleSubmit(){
    console.log("Hello adssdvdb")
  }
}
