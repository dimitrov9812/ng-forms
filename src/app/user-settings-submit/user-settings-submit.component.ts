import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../user-settings/user-settings';

@Component({
  selector: 'app-user-settings-submit',
  templateUrl: './user-settings-submit.component.html',
  styleUrls: ['./user-settings-submit.component.css']
})
export class UserSettingsSubmitComponent implements OnInit {
 
  public userSettings: UserSettings = {
    name:"Alex",
    emailOffers: true,
    interfaceStyle: 'dark',
    subscriptionType: 'lifetime',
    notes: 'here are some notes...'
  }

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    console.log(this.userSettings);
  }
}
