import { environment } from './../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../_services/auth.service';
import { FormControl, FormGroup, Validators } from "@angular/forms";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.createFormGroup();
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(7)]),
    });
  }

  login() {
    this.authService
    .login(this.loginForm.value.email, this.loginForm.value.password
      .suscribe());
  }
}
