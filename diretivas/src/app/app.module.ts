import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { NgSwitchDefaultComponent } from './diretiva-ngif/ng-switch-default/ng-switch-default.component';
import { DiretivaNgforComponent } from './diretiva-ngif/diretiva-ngfor/diretiva-ngfor.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { OperadorElvisComponent } from './operador-elvis/operador-elvis.component';

@NgModule({
  declarations: [
    AppComponent,
    DiretivaNgifComponent,
    NgSwitchDefaultComponent,
    DiretivaNgforComponent,
    NgClassComponent,
    NgStyleComponent,
    OperadorElvisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
