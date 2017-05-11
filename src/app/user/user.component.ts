import { Component, OnInit } from '@angular/core';
import { UserService } from "app/user/user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: any[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers()
      .map(response => response.json())
      .subscribe(data => this.users = data.content)
  }

}
