import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Input() users:string[] = [];
  @Output() onUpdate = new EventEmitter<number>();

  onSetActive(i:number) {
    this.onUpdate.emit(i);
  }
}
