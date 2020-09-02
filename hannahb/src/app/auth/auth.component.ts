import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from './auth.service';
// import * as admin from 'firebase-admin';
import * as firebase from "firebase/app";
import "firebase/auth";
// import "firebase/firestore";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {


  isLoginMode = true;
  selectionMade = false;
  loginSignUpForm: FormGroup;

  
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  createAccount() {
    this.isLoginMode = false;
    this.selectionMade = true;
  }

  login() {
    this.isLoginMode = true;
    this.selectionMade = true;
    
  }

  makeAdmin() {

    console.log("before");

  }

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.loginSignUpForm = new FormGroup({
      'email': new FormControl(null),
      'password': new FormControl(null),
      'name': new FormControl(null)
    });

  }

  onSubmit(formData: {email: string, password: string, name: string}) {
    console.log(formData);
    console.log("email: " + formData.email);
    console.log("password: " + formData.password);
    console.log("name: " + formData.name);
    if(!this.isLoginMode) {
      this.authService.signup(formData.email, formData.password).
                     subscribe(resData => { 
                                            console.log(resData);
                                          }, error => {
                                            console.log(error);
                                          });
    }
    else if(this.isLoginMode) {
      this.authService.login(formData.email, formData.password).
                       subscribe(resData => {
                         console.log(resData);
                       }, error => {
                         console.log(error);
                       });
    }
}

}
