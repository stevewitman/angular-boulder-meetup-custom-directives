import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { Example1Component } from './components/example1/example1.component';
import { SetBackgroundDirective } from './directives/set-background.directive';
import { Example2Component } from './components/example2/example2.component';
import { Example3Component } from './components/example3/example3.component';
import { Example4Component } from './components/example4/example4.component';
import { Example5Component } from './components/example5/example5.component';
import { Example6Component } from './components/example6/example6.component';
import { NumberOnlyDirective } from './directives/number-only.directive';
import { Example7Component } from './components/example7/example7.component';
import { HideAfterDirective } from './directives/hide-after.directive';

@NgModule({
  declarations: [
    AppComponent,
    Example1Component,
    Example2Component,
    Example3Component,
    Example4Component,
    Example5Component,
    Example6Component,
    SetBackgroundDirective,
    Example7Component,
    NumberOnlyDirective,
    HideAfterDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
