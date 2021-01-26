import { Component, OnInit } from '@angular/core';
import { AuthService } from './../_services/auth.service';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private AuthService: AuthService) { }

  ngOnInit(): void {
    this.signupForm = this.createFormGroup();
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      name: new FormControl("", [Validators.required, Validators.minLength(2)]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(7)]),
    });
  }

  signup(): void {
    console.log(this.signupForm.value);
    this.AuthService
    .signup(this.signupForm.value)
    .subscribe((msg) => console.log(msg));
  }
}
