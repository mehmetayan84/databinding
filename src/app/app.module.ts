import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DisplayComponent } from './serverdisplay/display.component';
import { CockpitComponent } from './serverbusiness/cockpit.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    CockpitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
