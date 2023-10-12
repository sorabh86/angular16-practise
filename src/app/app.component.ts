import { Component, AfterViewInit, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  constructor(private authService:AuthService){}

  ngOnInit(): void {
    
  }
  
  ngAfterViewInit(): void {
  }
}
