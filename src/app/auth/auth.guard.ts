import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
	
	constructor(private authService: AuthService, private router: Router) {}

	canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
			const url: string = state.url;

			return this.checkLogin(url);
		}

	checkLogin(url: string): boolean {
		if(this.authService.isLoggedIn) {
			return true;
		}

		this.authService.redirectUrl = url;

		this.router.navigate(['/login']);
		return false;
	}
	
  
}
