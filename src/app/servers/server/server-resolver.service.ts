import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Server, ServersService } from "../servers.service";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";


// this service load data to component automatically on creation
@Injectable()
export class ServerResolver implements Resolve<Server> {

    constructor(
        private serversService:ServersService
    ) {}

    resolve(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot
    ): Server | Observable<Server> | Promise<Server> {

        return this.serversService.getServer(+route.params['id']);
    }
}