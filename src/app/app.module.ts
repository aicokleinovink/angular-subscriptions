import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {TestService} from './services';
import {TestComponent} from './components';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [
    TestComponent
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule {}
