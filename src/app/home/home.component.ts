import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router:Router){}

  loadServers() {
    let a = 5;
    let b = 9;
    let c = a + b;
    this.router.navigate(['/servers']);
  }
}
