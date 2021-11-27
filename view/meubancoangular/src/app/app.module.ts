import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExtratoComponent } from './pages/extrato/extrato.component';
import { HomeComponent } from './pages/home/home.component';
import { SaqueComponent } from './pages/saque/saque.component';
import { DepositoComponent } from './pages/deposito/deposito.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ExtratoComponent,
    HomeComponent,
    SaqueComponent,
    DepositoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
