import { Component, OnInit } from '@angular/core';
import { UserService } from "app/user/user.service";
import { RoleService } from "app/user/role.service";
import * as _ from 'lodash';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: any = {};
  users: any[];
  roles: any[];

  constructor(private userService: UserService, private roleService: RoleService) { }

  ngOnInit() {
    this.getUsers();
    this.getRoles();
  }

  getUsers() {
    this.userService.getUsers()
      .subscribe(data => this.users = data.content);
  }

  getRoles() {
    this.roleService.getRoles()
      .map(response => response.json())
      .subscribe(data => this.roles = data);
  }

  saveUser() {
    this.userService.saveOrUpdate(this.user)
      .subscribe(data => this.getUsers());
    this.cleanUser();
  }

  editUser(user) {
    this.user = _.cloneDeep(user);
  }

  cancelUser() {
    this.cleanUser();
  }

  cleanUser() {
    this.user = {};
  }

  deleteUser(id) {
    this.userService.delete(id)
      .subscribe(data => this.getUsers());
  }
}
