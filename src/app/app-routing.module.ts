import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSettingsSubmitComponent } from './user-settings-submit/user-settings-submit.component';
import { UserSettingsFormComponent } from './user-settings/user-settings-form.component';

const routes: Routes = [
  {
  path: 'validation', component: UserSettingsFormComponent
  },
  {
    path: 'submit-form', component: UserSettingsSubmitComponent
  },
  {
    path: '**', component: UserSettingsFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
