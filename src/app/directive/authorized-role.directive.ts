import { Directive, ElementRef, Input, HostListener, OnInit } from '@angular/core';
import { AuthService } from "app/service/auth.service";

@Directive({
  selector: '[authorizedRoles]'
})
export class AuthorizedRoleDirective implements OnInit {

  @Input('authorizedRoles') authorizedRoles: string[];

  constructor(private authService: AuthService, private el: ElementRef) { }

  ngOnInit(): void {
    const userObject = JSON.parse(this.authService.getDetails());

    let igual = false;
    if (userObject) {
      for (let elRole of this.authorizedRoles) {
        if (userObject.role == elRole) {
          igual = true;
        }
      }
    }

    if (!igual) {
      this.el.nativeElement.style.display = 'none';
    }
  }
}
