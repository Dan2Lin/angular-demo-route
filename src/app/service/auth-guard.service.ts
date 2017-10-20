import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {LoginService} from "./login.service";

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private loginService:LoginService, private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log("AuthGuard#canActived called...");
    const url: string = state.url;
    return this.checkLogin(url);
  }

  checkLogin(url:string) : boolean {
    if(this.loginService.isLoginIn) {
      return true;
    }

    this.loginService.redirectURL = url;
    this.router.navigate(['/login']);
    return false;
  }

}
