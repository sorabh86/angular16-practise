import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverList = [];

  constructor() {
    this.serverList.push({
      id:0,name:"Server 1",date:new Date()
    })
    this.serverList.push({
      id:1,name:"Server 2",date:new Date()
    })
    this.serverList.push({
      id:2,name:"Server 3",date:new Date()
    })
  }

  ngOnInit() {
    console.log('init appcomponent');  
  }

  onAddServerButtonClick(serverName:string) {
    this.serverList.push({
      id:this.serverList.length,
      name:serverName,
      date:new Date()
    });
  }  
  onDeleteServerClick(index) {
    this.serverList.splice(index, 1);
  }
}
