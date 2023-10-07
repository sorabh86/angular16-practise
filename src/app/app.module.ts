import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasicDirective } from './directive/basic.directive';
import { BetterDirective } from './directive/better.directive';
import { ReactiveDirective } from './directive/reactive.directive';
import { ReactiveBindingDirective } from './directive/reactive-binding.directive';
import { UnlessDirective } from './directive/unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicDirective,
    BetterDirective,
    ReactiveDirective,
    ReactiveBindingDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
