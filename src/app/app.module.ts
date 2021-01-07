import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiComponent } from './components/app/api/api.component';
import { HeaderComponent } from './components/app/header/header.component';
import { SearchComponent } from './components/app/api/components/search/search.component';
import { ListComponent } from './components/app/api/components/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    ApiComponent,
    SearchComponent,
    ListComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
