import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserSwitchCounterService {
  private ActionCounter = 0;

  constructor() { }

 NewAction() {
  this.ActionCounter += 1;
  console.log(this.ActionCounter);
 }

}
