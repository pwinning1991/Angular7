import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { DocumentsComponent } from './documents/documents.component';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
@NgModule ({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomepageComponent,
    DocumentsComponent
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}
