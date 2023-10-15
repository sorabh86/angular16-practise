export type Server = {
    id:number
    name:string
    status:string
}
export type ServerData = {
  name:string
  status:string
}

export class ServersService {
  servers:Server[] = [
    { id: 1, name: 'Production Server', status:'Online' },
    { id: 2, name: 'Development Server', status:'Online' },
    { id: 3, name: 'Testing Server', status:'Offline' },
    { id: 4, name: 'Deployment Server', status:'Offline' },
  ];

  getServer(id: number):Server {
    // console.log('Servers: ', this.servers);
    
    return this.servers.filter(item=>(item.id==id))[0];
  }

  
  rand():number {
    return Math.round(Math.random()*1000);
  }

  updateServer(id:number, server:ServerData):void {
    let temps = this.getServer(id);
    temps.name = server.name;
    temps.status = server.status;
  }
}
