import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";
import { MedicineService } from "./../medicine.service";

@Component({
  selector: 'app-medicine-edit',
  templateUrl: './medicine-edit.component.html',
  styleUrls: ['./medicine-edit.component.css']
})
export class MedicineEditComponent implements OnInit {

  constructor(private route:ActivatedRoute,private medic:MedicineService,private router:Router) { }

  id:number

  medicine

  ngOnInit(): void {

    const id = this.route.snapshot.params['id']

    this.medic.viewMedicine(id).subscribe(res=>{
      this.medicine = res
    })
  }

  medicineEdit(){

    const id = this.route.snapshot.params['id']

    this.medic.editMedicine(id,this.medicine).subscribe(res=>{
      console.log(res);
      this.router.navigate(['/medicineList'])

    })
  }

}
