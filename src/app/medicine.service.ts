import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams } from "@angular/common/http";
import { BehaviorSubject } from 'rxjs';
import { map,tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  getToken = new BehaviorSubject<string>(null)
  isLoggedIn = new BehaviorSubject<boolean>(false)

  token : string =''

  constructor(private http:HttpClient) { }


userSignup(data){
  return this.http.post("https://medicalstore.mashupstack.com/api/register",data)
}

userLogin(data){
  return this.http.post("https://medicalstore.mashupstack.com/api/login",data)
  .pipe(
    tap((res:any)=>{
      localStorage.setItem('token',res.token);
      const getToken = res.token;
      this.getToken.next(getToken)
      this.isLoggedIn.next(true)
    })
  )
}  

getMedicineList(){

  this.token = localStorage.getItem('token')

  const headers = new HttpHeaders().set('Authorization','bearer '+ this.token)

  return this.http.get("https://medicalstore.mashupstack.com/api/medicine",{headers});
}

postMedicine(data:any){

  this.token = localStorage.getItem('token')

  const headers = new HttpHeaders().set('Authorization','bearer '+this.token)

  return this.http.post("https://medicalstore.mashupstack.com/api/medicine",data,{headers})
}

searchMedicine(param1:any){

  this.token = localStorage.getItem('token')

  const headers = new HttpHeaders().set('Authorization','bearer '+ this.token)

  const params = new HttpParams().set('keyword',param1)

  return this.http.get("https://medicalstore.mashupstack.com/api/medicine/search",{headers,params})

}

editMedicine(id:number,data:any){

  this.token = localStorage.getItem('token')

  const headers = new HttpHeaders().set('Authorization','bearer '+this.token)

  return this.http.post("https://medicalstore.mashupstack.com/api/medicine/"+id,data,{headers})

}

viewMedicine(id:number){

  this.token = localStorage.getItem('token')

  const headers = new HttpHeaders().set('Authorization','bearer '+this.token)

  return this.http.get("https://medicalstore.mashupstack.com/api/medicine/"+id,{headers})

}

deleteMedicine(id:number){

  this.token = localStorage.getItem('token')

  const headers = new HttpHeaders().set('Authorization','bearer '+this.token)

  return this.http.delete("https://medicalstore.mashupstack.com/api/medicine/"+id,{headers})
}

logoutSite(){
  this.token = localStorage.getItem('token')

  const headers = new HttpHeaders().set('Authorization','bearer '+this.token)

  return this.http.post("https://medicalstore.mashupstack.com/api/logout",null,{headers})
  .pipe(
    tap((res:any)=>{
      this.getToken.next(null);
      localStorage.removeItem('token');
    })
  )
}

}
