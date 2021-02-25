import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserSettings } from '../user-settings/user-settings';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // we will send a form to a web server using PutsReq
  postUserSettingsForm(userSettings: UserSettings): Observable<any>{
     // return of(userSettings); => testing our service
    return this.http.post('https://putsreq.com/00bRJNNCchhoc9HlXBKX',userSettings);
  }
}
