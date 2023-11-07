import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultSecret:string = 'pet';
  message:string;

  onSubmit(f:NgForm) {
    console.log(f);
    
  }
}
