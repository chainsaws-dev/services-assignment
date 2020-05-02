import { Injectable } from '@angular/core';
import { UserSwitchCounterService } from './user-switch-counter.service';

@Injectable({
  providedIn: 'root'
})
export class UsersManagementService {
  public activeUsers = ['Max', 'Anna'];
  public inactiveUsers = ['Chris', 'Manu'];
  constructor(private CounterService: UserSwitchCounterService) {

  }

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.CounterService.ActiveToInactive();
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.CounterService.InActiveToActive();
  }
}
