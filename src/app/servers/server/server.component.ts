import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { Server, ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  server: Server = { id: 0, name: '', status: '' };

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data:Data) => {
      this.server = data['server']; // data is comming from router resolve class to solve the object
    });

    /************ Manually input data in component ***********/
    // let id: number = this.route.snapshot.params['id'];
    // let server: Server = this.serversService.getServer(id);
    // if (server) {
    //   this.server = server;
    //   this.route.params.subscribe((params) => {
    //     this.server = this.serversService.getServer(+params['id']);
    //   });
    // }
  }

  onEdit(): void {
    console.log('edit button clicked');
    this.router.navigate(['edit'], { relativeTo: this.route, queryParamsHandling:'preserve' });
    
  }
}
