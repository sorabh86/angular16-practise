import { Component, OnInit } from '@angular/core';
import { Server, ServersService } from '../servers.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { CanComponentDeactivate } from './can-deactivate.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
})
export class EditServerComponent implements OnInit, CanComponentDeactivate{
  server: Server;
  allowEdit = false;
  serverName = '';
  serverStatus = '';
  changesSaved = false;

  constructor(
    private serversService:ServersService,
    private route:ActivatedRoute,
    private router:Router
  ) {}

  ngOnInit(): void {
    let serverId = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(serverId);

    this.route.params.subscribe((params:Params)=>{
      this.server = this.serversService.getServer(+params['id']);
    });

    this.route.queryParams.subscribe((params:Params) => {
      this.allowEdit = params['allowEdit']==1?true:false;
    });

    // console.log(this.server);
    // console.log(this.route.snapshot.queryParamMap);
    // console.log(this.route.snapshot.fragment);

    // set default values for components
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  canDeactivate():boolean | Promise<boolean> | Observable<boolean> {
    if(!this.allowEdit) {
      return true;
    }
    if(this.serverName !== this.server.name || this.serverStatus !== this.server.status && !this.changesSaved) {
      return confirm('Do you want to discard the changes?');
    } else {
      return true;
    }
  };

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name:this.serverName,
      status:this.serverStatus
    });
    this.changesSaved = true;
    this.router.navigate(['../'], {relativeTo:this.route});
  }
}
