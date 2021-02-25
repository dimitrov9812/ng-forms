import { Component, OnInit } from '@angular/core';
import { UserSettings } from './user-settings';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

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
