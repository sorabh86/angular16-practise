import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-options-form',
  templateUrl: './options-form.component.html',
  styleUrls: ['./options-form.component.css']
})
export class OptionsFormComponent {
  
  @Output() serverCreated = new EventEmitter<string>();

  serverName = '';

  onAddServerButtonClick() {
    if(this.serverName.length<1) {
      return;
    }

    this.serverCreated.emit(this.serverName);

    this.serverName = '';
  }
}
