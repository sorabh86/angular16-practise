import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import { Server, ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  servers:Server[] = [];

  constructor(
    private serversService:ServersService,
    private router:Router, 
    private route:ActivatedRoute // which route you currently on
  ){}

  ngOnInit(): void {
    this.servers = this.serversService.servers;
  }

  onAddServer(name:string) {
    if(name == '') return
    // this.servers.push({id:this.serversService., name:name, status:''})
  }

  onReloadPage() {
    this.router.navigate(['servers'], {relativeTo:this.route})
  }
}
