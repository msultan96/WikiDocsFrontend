import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardserviceService implements CanActivate{

  constructor() { }
  canActivate()
  {
     return true;
  }

}
