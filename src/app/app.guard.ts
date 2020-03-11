import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppGuard implements CanActivate {
  constructor(private route:Router){}
  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let userRole = sessionStorage.getItem("userRole");
    let toReturn = false;
    if(userRole!=null){
      if(sessionStorage.getItem("USER")!=null){
        toReturn=true;
      } else if(sessionStorage.getItem("ADMIN")!=null){
        toReturn=true;
      }
    }
    if(toReturn){
      return toReturn;
    }
    else {
      this.route.navigate(["error"]);
      return toReturn;
    }
  }
  
}
