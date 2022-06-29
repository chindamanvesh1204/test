import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GettersetterComponent } from './gettersetter/gettersetter.component';

const routes: Routes = [
  {path:'',component:GettersetterComponent},
  {path:"gettersetter",component:GettersetterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
