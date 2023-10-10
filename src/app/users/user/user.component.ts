import { Component,OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user = {
    id:1,
    name:"sorabh"
  };

  constructor(private route:ActivatedRoute){}

  ngOnInit(): void {
      this.user = {
        id: this.route.snapshot.params['id'],
        name: 'Unknown'
      };

      // fix not updating data when redirecting to same component but data is not updating
      this.route.params.subscribe((params:Params) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
      });
  }
}
