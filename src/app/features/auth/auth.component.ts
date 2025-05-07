import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
  encapsulation: ViewEncapsulation.None
})
export class AuthComponent {
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.minLength(2), Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  handleSubmit(){
    alert("Hello "+this.loginForm.value.username)
    this.loginForm.patchValue({
      username: '',
      password: ''
    });
  }
}
