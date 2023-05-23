import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from "@angular/forms";
import { MedicineModel } from "./../medicineModel";
import { MedicineService } from "./../medicine.service";

@Component({
  selector: 'app-medicine-create',
  templateUrl: './medicine-create.component.html',
  styleUrls: ['./medicine-create.component.css']
})
export class MedicineCreateComponent implements OnInit {

  createMedForm : FormGroup;

  medicineObj : MedicineModel = new MedicineModel();

  

  constructor(private medic : MedicineService) { }

  ngOnInit(): void {

    this.createMedForm = new FormGroup({

      MedicineName : new FormControl(null),
      CompanyName : new FormControl(null),
      ExpiryDate : new FormControl(null)

    })

  }

  medicinePost(){
    this.medicineObj.name = this.createMedForm.value.MedicineName;
    this.medicineObj.company = this.createMedForm.value.CompanyName;
    this.medicineObj.expiry_date = this.createMedForm.value.ExpiryDate;

    this.medic.postMedicine(this.medicineObj).subscribe(res=>{
      console.log(res);
    })
  }





}
