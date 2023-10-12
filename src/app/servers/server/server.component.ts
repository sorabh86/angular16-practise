import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Server, ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server:Server = {id:0,name:'',status:''};

  constructor(
    private serversService:ServersService,
    private route:ActivatedRoute
  ) {}

  ngOnInit(): void {
    let id:number = this.route.snapshot.params['id']; 
    let server:Server = this.serversService.getServer(id);
    if(server) {
      this.server = server;
      this.route.params.subscribe(params => {
        this.server = this.serversService.getServer(+params['id']);
      })
    }
  }
}
