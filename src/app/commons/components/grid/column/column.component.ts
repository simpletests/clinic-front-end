import { Component, OnInit, Input, Directive, ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'ss-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

}

@Directive({
  selector: '[col]'
})
export class ColMd implements OnInit {

  @Input('coluns') col: number | number[];
  @Input('offsets') offsets: number | number[];

  constructor(private el: ElementRef, private renderer: Renderer) { }

  ngOnInit(): void {
    if (this.col) {
      if (this.col instanceof Array) {
        this.setClasses(this.col[0], this.col[1], this.col[2], this.col[3]);
      } else {
        this.setClasses(this.col, this.col, this.col, this.col);
      }
    } else {
      this.setClasses(12, 12, 12, 12);
    }
  }

  setClasses(xs, sm, md, lg) {
    this.renderer.setElementClass(this.el.nativeElement, 'col-xs-' + xs, true);
    this.renderer.setElementClass(this.el.nativeElement, 'col-sm-' + sm, true);
    this.renderer.setElementClass(this.el.nativeElement, 'col-md-' + md, true);
    this.renderer.setElementClass(this.el.nativeElement, 'col-lg-' + lg, true);
  }
}
