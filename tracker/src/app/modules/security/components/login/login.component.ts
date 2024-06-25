import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { GoogleAuthProvider } from "firebase/auth";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private router:Router, private auth: AngularFireAuth) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  GoogleAuth() {
    return this.auth.signInWithPopup(new GoogleAuthProvider())
      .then((result) => {
        console.log(result);
        console.log('You have been successfully logged in!');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  login() {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')?.value;
      const pwd = this.loginForm.get('password')?.value;

      if (email && pwd) {
        this.auth.signInWithEmailAndPassword(email, pwd)
          .then(response => {
           this.router.navigateByUrl('/dashboard');
          });
      }
    } else {
      this.loginForm.markAllAsTouched(); // Mark all fields as touched to show validation errors
      console.log('Form is invalid');
    }
  }
}
