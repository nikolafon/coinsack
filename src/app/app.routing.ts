import { HelpComponent } from './../help/help.component';
import { SettingsComponent } from './../settings/settings.component';
import { BackupComponent } from './../backup/backup.component';
import { ExchangeComponent } from '../exchange/exchange.component';
import { WalletComponent } from '../wallet/wallet.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HashLocationStrategy, Location, LocationStrategy } from '@angular/common';

const appRoutes: Routes = [
  {
    path: 'portfolio',
    component: PortfolioComponent,
    data: { selectedItem: 'portfolio' }
  },
  {
    path: 'wallet',
    component: WalletComponent,
    data: { selectedItem: 'wallet' }
  },
  {
    path: 'exchange',
    component: ExchangeComponent,
    data: { selectedItem: 'exchange' }
  },
  {
    path: 'backup',
    component: BackupComponent,
    data: { selectedItem: 'backup' }
  },
  {
    path: 'settings',
    component: SettingsComponent,
    data: { selectedItem: 'settings' }
  },
  {
    path: 'help',
    component: HelpComponent,
    data: { selectedItem: 'help' }
  },
  {
    path: '**',
    redirectTo: 'portfolio'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
