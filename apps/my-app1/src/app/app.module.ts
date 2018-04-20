import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { MymoduleModule, HelloWorldService } from '@ngrx-data/mymodule';

@NgModule({
  imports: [BrowserModule, MymoduleModule, NxModule.forRoot()],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [HelloWorldService]
})
export class AppModule {}
