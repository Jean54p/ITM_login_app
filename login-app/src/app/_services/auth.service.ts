import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  /*getUserDetails(username, password) {
    // post details to API server return user info if correct
    return this.http.post('http://localhost:3000/login', {
      username,
      password
    }).subscribe(data => {
      console.log(data, " is what we got from the server")
    });

  }*/
}
