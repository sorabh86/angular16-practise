import { Component, OnInit } from '@angular/core';
import { Server, ServersService } from '../servers.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
})
export class EditServerComponent implements OnInit {
  server: Server;

  constructor(
    private serverService:ServersService,
    private route:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.server = this.serverService.getServer(1);
    console.log(this.server);
    console.log(this.route.snapshot.queryParamMap);
    console.log(this.route.snapshot.fragment);
    
  }
}
