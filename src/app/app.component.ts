import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <app-recipes></app-recipes>
          <app-shopping-list></app-shopping-list>
        </div>
      </div>
    </div>
  `,
  styles: [`
  
  `]
})
export class AppComponent {

}
