import { Component } from '@angular/core';
import { Selected } from './types/common.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Practise Angular 16';
  selection:Selected = {
    value:'component'
  };

  _constructor():void {
    this.selection.value = 'material';
    console.log(this.selection.value);
    
  }

}
