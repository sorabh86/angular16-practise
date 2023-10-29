import {Injectable, EventEmitter} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({providedIn:'root'})
export class UserService {
    // activatedEmitter = new EventEmitter<boolean>();

    // Subject is special type of Observable which can be called method next() from outside
    activatedEmitter = new Subject<boolean>();
}