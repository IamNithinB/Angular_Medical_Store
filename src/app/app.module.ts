import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MedicineListComponent } from './medicine-list/medicine-list.component';
import { MedicineViewComponent } from './medicine-view/medicine-view.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { MedicineCreateComponent } from './medicine-create/medicine-create.component';
import { MedicineEditComponent } from './medicine-edit/medicine-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MedicineListComponent,
    MedicineViewComponent,
    AuthenticationComponent,
    MedicineCreateComponent,
    MedicineEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
