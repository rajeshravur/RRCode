import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestinAngularComponent } from './testin-angular/testin-angular.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: TestinAngularComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
