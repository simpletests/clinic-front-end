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

  @Input('col') col: number | number[];
  @Input('xs') xs: number;
  @Input('sm') sm: number;
  @Input('md') md: number;
  @Input('lg') lg: number;
  @Input('cols') cols: number | number[];

  constructor(private el: ElementRef, private renderer: Renderer) { }

  ngOnInit(): void {
    if (this.col) {
      console.log('col');
      this.setClasses(this.col, this.col, this.col, this.col);
    } else if (this.cols) {
      console.log('cols');
      this.setClasses(this.cols[0], this.cols[1], this.cols[2], this.cols[3]);
    } else {
      console.log('others');
      this.setClasses(this.xs, this.sm, this.md, this.lg);
    }
  }

  setClasses(xs, sm, md, lg) {
    this.renderer.setElementClass(this.el.nativeElement, 'col-xs-' + xs, true);
    this.renderer.setElementClass(this.el.nativeElement, 'col-sm-' + sm, true);
    this.renderer.setElementClass(this.el.nativeElement, 'col-md-' + md, true);
    this.renderer.setElementClass(this.el.nativeElement, 'col-lg-' + lg, true);
  }
}
