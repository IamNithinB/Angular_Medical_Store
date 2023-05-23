import { Component, OnInit } from '@angular/core';
import { MedicineService } from "./../medicine.service";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn = false

   user : Subscription

  constructor(private medic:MedicineService,private router:Router) { }

  ngOnInit(): void {

    this.user = this.medic.getToken.subscribe((token)=>{
      if(token==null){
        console.log(token);
        this.isLoggedIn = false
      }
      else{
        console.log("token",token);
        this.isLoggedIn = true
      }
    })
  }

  ngOnDestroy():void{
    this.user.unsubscribe();
  }

  logout(){
    this.medic.logoutSite().subscribe(res=>{
      console.log(res)
      this.router.navigate(['/'])
    })
    
  }

}
