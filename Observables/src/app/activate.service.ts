import {Injectable} from '@angular/core';
import {EventEmitter} from '@angular/core'; 

@Injectable({providedIn:'root'})
export class ActivateService {
    isActivated = new EventEmitter<boolean>();
}