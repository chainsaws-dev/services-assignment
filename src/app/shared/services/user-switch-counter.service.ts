import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserSwitchCounterService {
  private ActiveInactiveCount = 0;
  private InactiveActiveCount = 0;

  constructor() { }

 ActiveToInactive() {
  this.ActiveInactiveCount += 1;
  console.clear();
  console.log('Active user went to inactive ' + this.ActiveInactiveCount);
 }

 InActiveToActive() {
  this.InactiveActiveCount += 1;
  console.clear();
  console.log('Inactive user went to active ' + this.InactiveActiveCount);
 }

}
