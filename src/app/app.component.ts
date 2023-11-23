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

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signupForm.setValue({
      userData: {
        username:suggestedName,
        email:''
      },
      secret: 'pet',
      message: '',
      gender: 'male'
    })
  }

  onSubmit(f:NgForm) {
    console.log(f);
  }
  // onSubmit(f:NgForm) {
  //   console.log(f);
  // }
}
