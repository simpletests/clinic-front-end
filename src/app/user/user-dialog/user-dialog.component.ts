import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from "@angular/material";
import { UserService } from "app/user/user.service";
import { RoleService } from "app/user/role.service";
import { GenderService } from "app/commons/gender.service";

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent implements OnInit {

  user: any;
  roles = [];
  genders = [];

  constructor(private dialogRef: MdDialogRef<UserDialogComponent>, private userService: UserService,
    private roleService: RoleService, private genderService: GenderService) { }

  ngOnInit() {
    this.roleService.fillOptions(this.roles);
    this.genderService.fillOptions(this.genders);
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
