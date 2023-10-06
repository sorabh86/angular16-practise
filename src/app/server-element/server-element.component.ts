import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent {
  @Input()
  element: {id:string, name:string, date:Date};

  @Output() onDeleteServer = new EventEmitter<void>();

  i:number;

  onDeleteServerClick() {
    this.onDeleteServer.emit();
  }

}
