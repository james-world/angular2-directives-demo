import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ResourceDirective } from './resource.directive';
import { InstructionsComponent } from './instructions/instructions.component';
import { TranslationService } from './translation.service';

@NgModule({
  declarations: [
    AppComponent,
    ResourceDirective,
    InstructionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TranslationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
