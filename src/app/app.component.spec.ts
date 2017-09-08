import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './../navigation/navigation.component';
import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserModule, RouterModule],
      declarations: [,
        NavigationComponent, AppComponent
      ],
    }).compileComponents();
  }));

});
