import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { DataComponent } from './child/data/data.component';
import { Data2Component } from './child/data2/data2.component';
import { Data3Component } from './child/data3/data3.component';
import { Data4Component } from './child/data4/data4.component';
import { Data5Component } from './child/data5/data5.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    DataComponent,
    Data2Component,
    Data3Component,
    Data4Component,
    Data5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
