import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './routes/home/home.component';
import { DataItemComponent } from './components/data-item/data-item.component';
import { DataHeadersComponent } from './components/data-headers/data-headers.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DataItemComponent,
    DataHeadersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
