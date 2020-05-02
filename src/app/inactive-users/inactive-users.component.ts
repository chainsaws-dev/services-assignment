import { Component, Injectable } from '@angular/core';
import { UsersManagementService } from '../shared/services/users-management.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  constructor(public UserManagement: UsersManagementService) { }

  onSetToActive(id: number) {
    this.UserManagement.onSetToActive(id);
  }
}
