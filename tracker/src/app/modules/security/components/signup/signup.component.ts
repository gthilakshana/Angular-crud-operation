import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { GoogleAuthProvider } from "firebase/auth";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  constructor(private auth: AngularFireAuth) {}

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

  signupForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  signup() {
    const email = this.signupForm.get('email')?.value;
    const pwd = this.signupForm.get('password')?.value;

    if (email && pwd) {
      this.auth.createUserWithEmailAndPassword(email, pwd).then(response => {
          console.log(response);
        })

    }
  }
}
