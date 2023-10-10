import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  servers = [];

  constructor(
    private router:Router, 
    private route:ActivatedRoute // which route you currently on
  ){}

  ngOnInit(): void {
    this.servers.push({name:'Server:'+this.rand()})
    this.servers.push({name:'Server:'+this.rand()})
    this.servers.push({name:'Server:'+this.rand()})
    this.servers.push({name:'Server:'+this.rand()})
  }

  onAddServer() {
    this.servers.push({name:'Server:'+this.rand()})
  }
  rand() {
    return Math.round(Math.random()*1000);
  }

  onReloadPage() {
    this.router.navigate(['servers'], {relativeTo:this.route})
  }
}
