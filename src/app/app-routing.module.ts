import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { ChildComponent } from './child/child.component';
import { GettersetterComponent } from './gettersetter/gettersetter.component';
 import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  {path:'',component:GettersetterComponent},
  {path:"gettersetter",component:GettersetterComponent},
   {path:"parent",component:ParentComponent},
  {path:"child",component:ChildComponent},
  {path:"attributeDirective",component:AttributeDirectivesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
