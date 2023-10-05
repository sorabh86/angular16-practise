import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverName = '';
  servers = [];

  onAddServerButtonClick() {
    if(this.serverName.length<1) {

      return;
    }

    this.servers.push({
      id:this.servers.length,
      name:this.serverName,
      date:new Date()
    });
  }
}
