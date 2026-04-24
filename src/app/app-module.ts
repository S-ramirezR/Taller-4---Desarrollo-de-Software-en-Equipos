import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { HttpClientModule } from '@angular/common/http';
import {SerieModule} from "./serie/serie.module";

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    SerieModule,
    HttpClientModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
