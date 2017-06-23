import { Component, OnInit } from '@angular/core';
import { UserService } from "app/user/user.service";
import { RoleService } from "app/user/role.service";
import { MdDialog, MdDialogRef } from "@angular/material";
import * as _ from 'lodash';
import { UserDialogComponent } from "app/user/user-dialog/user-dialog.component";
import { ConfirmComponent } from "app/commons/components/dialogs/confirm/confirm.component";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users = [];

  constructor(private userService: UserService, private roleService: RoleService, public dialog: MdDialog) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getList()
      .subscribe(data => this.users = data.content);
  }

  createNew() {
    this.userService.getNew().subscribe(u => this.openFormDialog(u));
  }

  editUser(user) {
    this.openFormDialog(user);

  }

  private openFormDialog(user) {
    let dialogRef = this.dialog.open(UserDialogComponent, {

    });
    dialogRef.componentInstance.user = _.cloneDeep(user);
    dialogRef.afterClosed().subscribe(hasChanged => {
      if (hasChanged) {
        this.getUsers();
      }
    });
  }

  confirmDelete(deletedUser) {
    let dialogRef = this.dialog.open(ConfirmComponent)
    dialogRef.componentInstance.message = "Tem certeza?";
    dialogRef.afterClosed().subscribe(confirm => {
      if (confirm) {
        this.userService.delete(deletedUser.id).subscribe(response => this.getUsers());
      }
    });
  }
}
