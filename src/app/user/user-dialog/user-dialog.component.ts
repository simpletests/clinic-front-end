import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from "@angular/material";
import { UserService } from "app/user/user.service";
import { RoleService } from "app/user/role.service";

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent implements OnInit {

  user: any;
  roles: any[];

  constructor(private dialogRef: MdDialogRef<UserDialogComponent>, private userService: UserService,
    private roleService: RoleService) { }

  ngOnInit() {
    this.getRoles();
  }

  getRoles() {
    this.roleService.getRoles()
      .map(response => response.json())
      .subscribe(data => this.roles = data);
  }

  delete() {
    this.userService.delete(this.user.id)
      .subscribe(event => event.ok ? this.dialogRef.close(true) : null);
  }

  saveOrUpdate() {
    this.userService.saveOrUpdate(this.user)
      .subscribe(event => event.ok ? this.dialogRef.close(true) : null);;
  }
}
