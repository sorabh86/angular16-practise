import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  @Input() users:string[] = []; 
  @Output() onUpdate = new EventEmitter<number>();

  onSetActive(i:number) {
    this.onUpdate.emit(i);
  }
}
