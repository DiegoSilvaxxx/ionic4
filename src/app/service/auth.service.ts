import { Injectable } from "@angular/core";
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable()
export class AuthService{
    constructor(public fire : AngularFireAuth,
    public router : Router){
        
    }
    isAuth(){ //esta logado
        this.fire.authState.subscribe(user=>{
            if(!user)this.router.navigate(['/home']);
            //se 
        })
    }
}