import { Injectable } from '@angular/core';
import { MdSnackBar } from "@angular/material";

@Injectable()
export class SnackbarService {

  constructor(public snackBar: MdSnackBar) { }

  public info(message: string) {
    this.snackBar.open(message, null, { duration: 1000 });
  }
}
