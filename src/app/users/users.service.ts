export type User = {
    id:number
    name:string
}

export class UserService {
    users:User[] = [
        {id:1, name:"Sorabh"},
        {id:2, name:"Neeraj"},
        {id:3, name:"Anamika"},
    ];

    getUser(id:number):User {
        return this.users.filter(item => (item.id===id))[0];
    }

}