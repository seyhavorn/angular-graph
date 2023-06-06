import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MenuComponent} from './menu/menu.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {Chart3Component} from './chart3/chart3.component';
import {Chart1Component} from './chart1/chart1.component';
import { Chart2Component } from './chart2/chart2.component';
import { Chart4Component } from './chart4/chart4.component';
import { Chart5Component } from './chart5/chart5.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    Chart3Component,
    Chart1Component,
    Chart2Component,
    Chart4Component,
    Chart5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
