import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedicineListComponent } from './medicine-list/medicine-list.component';
import { MedicineViewComponent } from './medicine-view/medicine-view.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { MedicineCreateComponent } from './medicine-create/medicine-create.component';
import { MedicineEditComponent } from './medicine-edit/medicine-edit.component';
import { AuthGuard } from "./auth.guard";


const routes: Routes = [{
  path:'',
  component:AuthenticationComponent
},
{
path:"medicineList",
component:MedicineListComponent,
canActivate:[AuthGuard]
},
{
path:"createMedicine",
component:MedicineCreateComponent,
canActivate:[AuthGuard]
},
{
  path:"vieMedicine/:id",
  component:MedicineViewComponent
},
{
  path:"editMedicine/:id",
  component : MedicineEditComponent

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
