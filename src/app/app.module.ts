import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { BodySectionOneComponent } from './body-section-one/body-section-one.component';
import { BodySectionTwoComponent } from './body-section-two/body-section-two.component';
import { FormsModule } from '@angular/forms';
import { CommonDropdownComponent } from './common-dropdown/common-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainBodyComponent,
    BodySectionOneComponent,
    BodySectionTwoComponent,
    CommonDropdownComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
