import { HelpComponent } from '../help/help.component';
import { SettingsComponent } from '../settings/settings.component';
import { BackupComponent } from '../backup/backup.component';
import { ExchangeComponent } from './../exchange/exchange.component';
import { WalletComponent } from '../wallet/wallet.component';
import { PortfolioComponent } from './../portfolio/portfolio.component';
import { NavigationComponent } from './../navigation/navigation.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    NavigationComponent, AppComponent, PortfolioComponent, WalletComponent, ExchangeComponent,
    BackupComponent, SettingsComponent, HelpComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
