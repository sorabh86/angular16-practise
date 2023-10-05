import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverName = '';
  servers = [];

  constructor() {
    this.servers.push({
      id:0,name:"Server 1",date:new Date()
    })
    this.servers.push({
      id:1,name:"Server 2",date:new Date()
    })
    this.servers.push({
      id:2,name:"Server 3",date:new Date()
    })
  }

  onAddServerButtonClick() {
    if(this.serverName.length<1) {
      return;
    }

    this.servers.push({
      id:this.servers.length,
      name:this.serverName,
      date:new Date()
    });

    this.serverName = '';
  }

  onDeleteServerClick(index) {
    this.servers.splice(index, 1);
  }
}
