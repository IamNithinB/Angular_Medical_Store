import { Component, OnInit } from '@angular/core';
import { MedicineService } from "./../medicine.service";
import { ActivatedRoute,Router } from "@angular/router";

@Component({
  selector: 'app-medicine-view',
  templateUrl: './medicine-view.component.html',
  styleUrls: ['./medicine-view.component.css']
})
export class MedicineViewComponent implements OnInit {

  id:number

  viewArray : any

  constructor(private medic:MedicineService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {

    this.id =  this.route.snapshot.params['id']
    this.medicineView(this.id)
  }

  medicineView(id){
    this.medic.viewMedicine(id).subscribe(res=>{
      console.log(res);
      this.viewArray = res
    })
  }

  editPage(id:number){
    this.router.navigate(['/editMedicine',id])
  }




}
