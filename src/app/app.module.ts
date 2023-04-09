import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterPipe } from './pipe/filter.pipe';
import { GettersetterComponent } from './gettersetter/gettersetter.component';
import { ImpurepipesComponent } from './pure/impurepipes/impurepipes.component';
 //import { HttpClientModule } from '@angular/common/http';
import { HttpClientModule} from '@angular/common/http';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { LifecylehooksComponent } from './lifecylehooks/lifecylehooks.component';
import { SubjectComponent } from './subject/subject.component';
import { SubjectService } from './subject.service';
import { ForinputstaskComponent } from './forinputstask/forinputstask.component';
import { MergeMapComponent } from './merge-map/merge-map.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    GettersetterComponent,
    ImpurepipesComponent,
     AttributeDirectivesComponent,
    ParentComponent,
    ChildComponent,
    LifecylehooksComponent,
    SubjectComponent,
    ForinputstaskComponent,
    MergeMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [SubjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
