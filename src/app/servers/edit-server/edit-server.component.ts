import { Component, OnInit } from '@angular/core';
import { Server, ServersService } from '../servers.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
})
export class EditServerComponent implements OnInit {
  server: Server;
  allowEdit = false;

  constructor(
    private serverService:ServersService,
    private route:ActivatedRoute
  ) {}

  ngOnInit(): void {
    let serverId = +this.route.snapshot.params['id'];
    this.server = this.serverService.getServer(serverId);

    this.route.params.subscribe((params:Params)=>{
      this.server = this.serverService.getServer(+params['id']);
    });

    this.route.queryParams.subscribe((params:Params) => {
      this.allowEdit = params['allowEdit']==1?true:false;
    });

    console.log(this.server);
    console.log(this.route.snapshot.queryParamMap);
    console.log(this.route.snapshot.fragment);
    
  }
}
