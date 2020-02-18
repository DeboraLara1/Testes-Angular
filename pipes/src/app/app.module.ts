import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { CamelPipePipe } from './exemplos-pipes/camel-pipe.pipe';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { FiltroArrayPipe } from './filtro-array.pipe';
import { FiltroArrayImpuroPipe } from './filtro-array-impuro.pipe';
registerLocaleData(localePt, 'pt');
import { SettingsService } from './settings.service'

@NgModule({
  declarations: [
    AppComponent,
    ExemplosPipesComponent,
    CamelPipePipe,
    FiltroArrayPipe,
    FiltroArrayImpuroPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt'
    },
    /* SettingsService,
     {
       provide: LOCALE_ID,
       deps: [SettingsService],
       useFactory: (settingsService: any) => settingsService.getLocale()
     }*/

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
