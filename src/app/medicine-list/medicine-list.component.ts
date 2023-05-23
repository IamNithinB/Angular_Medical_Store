import { Component, OnInit } from '@angular/core';
import { MedicineService } from "./../medicine.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.css']
})
export class MedicineListComponent implements OnInit {

  constructor(private medic:MedicineService,private route:Router) { }

  medArray : any

  serachArray : any

  medName : String = ''

  search : boolean = false

  ngOnInit(): void {

    this.getMedic()

  }

getMedic(){
  this.medic.getMedicineList().subscribe(res=>{
    console.log(res);
    this.medArray = res;
    this.search = false
  })
}

getValue(name:any){
  this.medName = name
}

searchMedicine(){
  this.medic.searchMedicine(this.medName).subscribe(res=>{
    console.log(res);
    this.serachArray = res;
    this.search = true;
  })
}

viewPage(id:number){
  this.route.navigate(['/vieMedicine',id])
}

createPage(){
  this.route.navigate(['/createMedicine'])
}

medicineDelete(id:number){
  this.medic.deleteMedicine(id).subscribe(res=>{
    console.log(res)
    this.getMedic()
  })
}

}
