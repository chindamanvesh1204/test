import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterPipe } from './pipe/filter.pipe';
import { GettersetterComponent } from './gettersetter/gettersetter.component';
import { ImpurepipesComponent } from './pure/impurepipes/impurepipes.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    GettersetterComponent,
    ImpurepipesComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
