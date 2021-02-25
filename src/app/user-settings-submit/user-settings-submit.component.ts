import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Observable } from 'rxjs';
import { DataService } from '../data/data.service';
import { UserSettings } from '../user-settings/user-settings';

@Component({
  selector: 'app-user-settings-submit',
  templateUrl: './user-settings-submit.component.html',
  styleUrls: ['./user-settings-submit.component.css']
})
export class UserSettingsSubmitComponent implements OnInit {
  public isFormValid: boolean | null = true;
  public formError = '';
  public userSettings: UserSettings = {
    name:"Alex",
    emailOffers: true,
    interfaceStyle: 'dark',
    subscriptionType: 'lifetime',
    notes: 'here are some notes...'
  }

  public subscriptionTypes: Observable<string[]> | undefined;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    // get the subscription types
    this.subscriptionTypes = this.dataService.getSubscriptionTypes();
  }

  // here we will perform validation before the form is submited
  onSubmit(form: NgForm): void {
    console.log(form.valid);
    
    if (form.valid) {
        this.formError = '';
        this.dataService.postUserSettingsForm(this.userSettings)
                        .subscribe((result) => {
                           console.log('success', result);
                        },
                        (error) => {
                           console.log('error', error);
                        });
    } else {
      this.formError = 'Fix the errors above'
    }
   
  }

  // After a filed is being blurred we can:
  // Show another region of the form
  // Validate
  // Alert
  // etc.
  onBlur(field: NgModel): void {
    console.log("You just blurred the field. isFieldValid: " + field.valid);
  }
}
