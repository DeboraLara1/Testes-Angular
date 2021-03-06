import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { routing } from './app.routing';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    HomeComponent,
    LoginComponent,
    CursoDetalheComponent

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    routing

  ],

  providers: [],


  bootstrap: [AppComponent]
})
export class AppModule { }
