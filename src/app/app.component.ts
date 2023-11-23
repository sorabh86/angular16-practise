import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm:NgForm;

  defaultSecret:string = 'teacher';
  message:string;

  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    secret: '',
    message: '',
    gender: ''
  };
  submitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';

    // set all controls values using form method
    // this.signupForm.setValue({
    //   userData: {
    //     username:suggestedName,
    //     email:''
    //   },
    //   secret: 'pet',
    //   message: '',
    //   gender: 'male'
    // });

    // set only certail controls
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  resetHandle() {
    this.signupForm.reset();
  }

  onSubmit() {
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.username;
    this.user.secret = this.signupForm.value.secret;
    this.user.message = this.signupForm.value.message;
    this.user.gender = this.signupForm.value.gender;
  }
  // onSubmit(f:NgForm) {
  //   console.log(f);
  // }
}
