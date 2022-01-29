import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './routes/home/home.component';
import { DataItemComponent } from './components/data-item/data-item.component';
import { DataHeadersComponent } from './components/data-headers/data-headers.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { DeadlineLabelPipe } from './pipes/deadline-label.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DataItemComponent,
    DataHeadersComponent,
    SearchBoxComponent,
    DeadlineLabelPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
