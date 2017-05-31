import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from "@angular/material";
import { UserService } from "app/user/user.service";

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent implements OnInit {

  user: any;

  constructor(public dialogRef: MdDialogRef<UserDialogComponent>, public userService: UserService) { }

  ngOnInit() {
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
