import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoggedIn = false;

  constructor(private router:Router,
    private authService:AuthService,
  ){}

  ngOnInit(): void {
    // this.isLoggedIn = this.authService.loggedIn;
  }

  loadServers() {
    let a = 5;
    let b = 9;
    let c = a + b;
    this.router.navigate(['/servers']);
  }

  login() {
    this.authService.login();
    this.isLoggedIn = true;
  }
  logout() {
    this.authService.logout();
    this.isLoggedIn = false;
  }
}
