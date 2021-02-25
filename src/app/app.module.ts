// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'
// Components
import { AppComponent } from './app.component';
import { UserSettingsFormComponent } from './user-settings/user-settings-form.component';
import { UserSettingsSubmitComponent } from './user-settings-submit/user-settings-submit.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    UserSettingsFormComponent,
    UserSettingsSubmitComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
