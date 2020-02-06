import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { NgSwitchDefaultComponent } from './diretiva-ngif/ng-switch-default/ng-switch-default.component';

@NgModule({
  declarations: [
    AppComponent,
    DiretivaNgifComponent,
    NgSwitchDefaultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
