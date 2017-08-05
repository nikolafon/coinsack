import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { ECPair } from 'bitcoinjs-lib';
import { HttpModule, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MaterialModule, HttpModule
  ],
  entryComponents: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private http: Http) {
    // console.log(ECPair.makeRandom().getAddress());
    console.log(http.get('blockchain.info/rawaddr/1CDrvMW7R5S1LCsGxEYfuUsdSznsSxH8tF?format=json')
      .toPromise().then(response => response.json()));
  }

}
