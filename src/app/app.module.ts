import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilhoComponent } from './components/pai/filho/filho.component';
import { PaiComponent } from './components/pai/pai.component';

@NgModule({
  declarations: [
    AppComponent,
    PaiComponent,
    FilhoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
