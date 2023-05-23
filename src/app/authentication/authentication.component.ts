import { Component, OnInit } from '@angular/core';
import { MedicineService } from "./../medicine.service";
import { Router } from "@angular/router";
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  isLoginMode = true
  errorMsg : string=''
  errMsg : any
  

  constructor(private medic:MedicineService,private route:Router) { }

  ngOnInit(): void {

    // localStorage.removeItem('token')
  }

  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }

  signup(data:any){

    this.medic.userSignup(data).subscribe(res=>{
      console.log(res);
    })

  }

  login(data){

    this.medic.userLogin(data).subscribe(res=>{
      console.log(res);
      this.route.navigate(['/medicineList'])
    },err=>{
      if(data.email == ""){
        console.log(err);
        console.log(err.error.errors.email);
        this.errorMsg = err.error.errors.email;
      }
      else if(data.password == ""){
        this.errorMsg = err.error.errors.password;
      }         
      else{
        this.errorMsg = err.error.errors;
        console.log(err.error.errors);
      }
     
    })

  }

}