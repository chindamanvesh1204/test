import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterPipe } from './pipe/filter.pipe';
import { GettersetterComponent } from './gettersetter/gettersetter.component';
import { ImpurepipesComponent } from './pure/impurepipes/impurepipes.component';
import { InputComponent } from './input/input.component';
//import { HttpClientModule } from '@angular/common/http';
import { HttpClientModule} from '@angular/common/http';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    GettersetterComponent,
    ImpurepipesComponent,
    InputComponent,
    AttributeDirectivesComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
