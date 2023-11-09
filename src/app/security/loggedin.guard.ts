import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "./login/login.service";
import { Injectable } from "@angular/core";

@Injectable()
export class LoggedInGuard implements CanLoad, CanActivate{

    constructor(private loginService: LoginService){}

    checkAuthentication(path: string): boolean{
        const loogedIn = this.loginService.isLoggedIn()
        if(!loogedIn){
            this.loginService.handleLogin(`/${path}`)
        }
        return loogedIn
    }

    canLoad(route: Route): boolean{
        console.log('canload')
        return this.checkAuthentication(route.path)
    }

    canActivate(activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot): boolean{
        console.log('canActivated')
        return this.checkAuthentication(activatedRoute.routeConfig.path)
    }




}