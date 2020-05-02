import { Component, Injectable } from '@angular/core';
import { UsersManagementService } from '../shared/services/users-management.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {

  constructor(public UserManagement: UsersManagementService) { }

  onSetToInactive(id: number) {
    this.UserManagement.onSetToInactive(id);
  }
}
